"""
Facebook Messenger webhook for The Continental Hotel, powered by Claude.

Flow:
  1. Meta calls GET /webhook once to verify the callback URL.
  2. Meta calls POST /webhook for every incoming message; we verify the
     request signature, ask Claude for a reply grounded in knowledge.md,
     and send it back through the Messenger Send API.

See README.md in this directory for Meta App / deployment setup.
"""

import hashlib
import hmac
import logging
import os
from pathlib import Path

import anthropic
import requests
from dotenv import load_dotenv
from flask import Flask, request, abort, jsonify

load_dotenv()

PAGE_ACCESS_TOKEN = os.environ["PAGE_ACCESS_TOKEN"]
VERIFY_TOKEN = os.environ["VERIFY_TOKEN"]
APP_SECRET = os.environ["APP_SECRET"]
GRAPH_API_VERSION = os.environ.get("GRAPH_API_VERSION", "v21.0")

MODEL = "claude-opus-5"
MAX_HISTORY_TURNS = 10  # per-user messages kept for context (in-memory only)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("continental-chatbot")

app = Flask(__name__)
claude = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from env

KNOWLEDGE = (Path(__file__).parent / "knowledge.md").read_text(encoding="utf-8")
SYSTEM_PROMPT = f"""You are the Facebook Messenger assistant for The Continental Hotel.
Answer guest questions in a warm, concise, concierge tone using ONLY the facts below.
If something isn't covered here, say you'll connect the guest with the team and share
the placeholder contact info rather than guessing. Never invent prices, dates,
availability, or policy details. Reply in the language the guest writes in.

--- KNOWLEDGE BASE ---
{KNOWLEDGE}
"""

# In-memory per-user conversation history. Fine for a single process / low
# volume; swap for Redis or a DB before scaling to multiple workers/dynos.
_conversations: dict[str, list[dict]] = {}


def verify_signature(payload: bytes, signature_header: str | None) -> bool:
    if not signature_header or not signature_header.startswith("sha256="):
        return False
    expected = hmac.new(APP_SECRET.encode("utf-8"), payload, hashlib.sha256).hexdigest()
    provided = signature_header.split("sha256=", 1)[1]
    return hmac.compare_digest(expected, provided)


def ask_claude(sender_id: str, user_text: str) -> str:
    history = _conversations.setdefault(sender_id, [])
    history.append({"role": "user", "content": user_text})
    history[:] = history[-MAX_HISTORY_TURNS:]

    response = claude.messages.create(
        model=MODEL,
        max_tokens=1024,
        system=SYSTEM_PROMPT,
        output_config={"effort": "low"},
        messages=history,
    )
    reply = next((b.text for b in response.content if b.type == "text"), "").strip()
    reply = reply or "Sorry, could you rephrase that?"

    history.append({"role": "assistant", "content": reply})
    return reply


def send_typing_on(recipient_id: str) -> None:
    _call_send_api({"recipient": {"id": recipient_id}, "sender_action": "typing_on"})


def send_text_message(recipient_id: str, text: str) -> None:
    _call_send_api({"recipient": {"id": recipient_id}, "message": {"text": text}})


def _call_send_api(payload: dict) -> None:
    url = f"https://graph.facebook.com/{GRAPH_API_VERSION}/me/messages"
    resp = requests.post(url, params={"access_token": PAGE_ACCESS_TOKEN}, json=payload, timeout=10)
    if resp.status_code >= 400:
        logger.error("Send API error %s: %s", resp.status_code, resp.text)


@app.get("/webhook")
def verify_webhook():
    mode = request.args.get("hub.mode")
    token = request.args.get("hub.verify_token")
    challenge = request.args.get("hub.challenge")

    if mode == "subscribe" and token == VERIFY_TOKEN:
        return challenge or "", 200
    abort(403)


@app.post("/webhook")
def handle_webhook():
    if not verify_signature(request.get_data(), request.headers.get("X-Hub-Signature-256")):
        abort(403)

    data = request.get_json(silent=True) or {}
    if data.get("object") != "page":
        return jsonify(status="ignored"), 200

    for entry in data.get("entry", []):
        for event in entry.get("messaging", []):
            sender_id = event.get("sender", {}).get("id")
            message = event.get("message", {})

            if not sender_id or message.get("is_echo"):
                continue

            text = message.get("text")
            if not text:
                continue  # attachments/quick-reply payloads not handled yet

            try:
                send_typing_on(sender_id)
                reply = ask_claude(sender_id, text)
                send_text_message(sender_id, reply)
            except Exception:
                logger.exception("Failed to handle message from %s", sender_id)
                send_text_message(
                    sender_id,
                    "Sorry, something went wrong on our end — please try again in a moment.",
                )

    return jsonify(status="ok"), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
