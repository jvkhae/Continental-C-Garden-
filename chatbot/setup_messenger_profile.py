"""
One-time setup: configures the Page's "Get Started" button and persistent
menu so first-time guests land on the category quick-reply flow in app.py.

Run once after deploying (and again any time you change the menu):

    python setup_messenger_profile.py
"""

import os

import requests
from dotenv import load_dotenv

load_dotenv()

PAGE_ACCESS_TOKEN = os.environ["PAGE_ACCESS_TOKEN"]
GRAPH_API_VERSION = os.environ.get("GRAPH_API_VERSION", "v21.0")

URL = f"https://graph.facebook.com/{GRAPH_API_VERSION}/me/messenger_profile"

PROFILE = {
    "get_started": {"payload": "GET_STARTED"},
    "persistent_menu": [
        {
            "locale": "default",
            "composer_input_disabled": False,
            "call_to_actions": [
                {"type": "postback", "title": "🍽 Ресторан", "payload": "MENU_RESTAURANT"},
                {"type": "postback", "title": "🎉 Хурим/Зоог", "payload": "BANQUETS_EVENTS"},
                {"type": "postback", "title": "🛏 Өрөө", "payload": "ROOMS_INFO"},
                {"type": "postback", "title": "📞 Холбоо барих", "payload": "CONTACT_INFO"},
            ],
        }
    ],
}


def main() -> None:
    resp = requests.post(URL, params={"access_token": PAGE_ACCESS_TOKEN}, json=PROFILE, timeout=10)
    print(resp.status_code, resp.text)
    resp.raise_for_status()


if __name__ == "__main__":
    main()
