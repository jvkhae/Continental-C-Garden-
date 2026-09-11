# The Continental Hotel — Messenger Chatbot

An AI chatbot for your Facebook Page, powered by Claude. It answers guest
questions (hotel amenities, C Garden hours/menu, booking contact) grounded in
`knowledge.md` — it won't invent prices, dates, or availability that aren't
listed there.

## How it works

- `GET /webhook` — Meta's one-time URL verification.
- `POST /webhook` — every incoming Messenger message/postback. The app
  verifies Meta's request signature, then:
  - If the guest tapped a **quick-reply button** (or the "Get Started"
    button / persistent menu), it's handled deterministically in
    `handle_payload()` — no Claude call, so it's instant and free. This
    covers the category menu (🍽 Ресторан / 🎉 Хурим‑Зоог / 🛏 Өрөө /
    📞 Холбоо барих) and the **Banquets & Events** sub-menu, which links
    straight to the three flipbook menus (Хүлээн авалт / Хуримын цэс /
    Ресторан цэс).
  - Otherwise it's free text — sent to Claude with `knowledge.md` as the
    system prompt, and the reply always comes back with the main category
    quick replies attached so the guest can jump back into the button flow.
- Conversation history is kept in memory per sender — fine for a single
  process/low volume. For production scale (multiple workers, restarts),
  swap `_conversations` in `app.py` for Redis or a small DB table.
- Menu links (flipbook URLs) live in `MENU_LINKS` in `app.py` — update them
  there when the wedding/reception/restaurant flipbooks change.

## 1. Local setup

```bash
cd chatbot
pip install -r requirements.txt
cp .env.example .env   # fill in the values below
python app.py           # runs on :8080 (or $PORT)
```

For production, run behind gunicorn instead of the Flask dev server:

```bash
gunicorn -w 2 -b 0.0.0.0:$PORT app:app
```

## 2. Create the Meta App + Page connection

1. Go to [developers.facebook.com](https://developers.facebook.com/apps) → **Create App** → type **Business**.
2. Add the **Messenger** product to the app.
3. Under Messenger → **Access Tokens**, generate a **Page Access Token** for
   the Facebook Page you want the bot to run on. Put it in `.env` as
   `PAGE_ACCESS_TOKEN`.
4. Under **App Settings → Basic**, copy the **App Secret** into `.env` as
   `APP_SECRET` (used to verify that webhook calls really come from Meta).
5. Pick any random string for `VERIFY_TOKEN` in `.env` — you'll re-enter the
   same value in the webhook setup below.
6. Put your Anthropic key in `.env` as `ANTHROPIC_API_KEY`.

## 3. Deploy

Deploy `chatbot/` to your existing server/hosting (this needs a real process,
not GitHub Pages — Pages only serves static files). Whatever you use, you
need:

- The app running and reachable over **HTTPS** (Meta requires HTTPS for
  webhooks).
- The environment variables from `.env.example` set on the host.

Note the public URL, e.g. `https://your-domain.example.com`.

## 4. Point Meta at your webhook

1. In the Meta App, go to **Messenger → Settings → Webhooks** → **Add Callback URL**.
2. Callback URL: `https://your-domain.example.com/webhook`
3. Verify Token: the same string you put in `VERIFY_TOKEN`.
4. Subscribe to at least the `messages` field (add `messaging_postbacks` too
   if you plan to use quick-reply buttons later).
5. Under **Messenger → Settings**, subscribe your Page to the app.

Meta will call `GET /webhook` immediately to verify — if it succeeds, you're live.

## 5. Turn on the Get Started button + menu

Run once (and again whenever you change the category buttons):

```bash
cd chatbot
python setup_messenger_profile.py
```

This sets the Page's "Get Started" button and persistent menu (the ☰ icon
in Messenger) so new conversations land straight on the category
quick-reply flow.

## 6. Test it

Message your Facebook Page directly. Try tapping the category buttons
(Ресторан / Хурим‑Зоог / Өрөө / Холбоо барих), then Хурим/Зоог → each of the
3 sub-menus. Also try free text: "What are your hours?", "Хуримын цэс
харуулаач", "How do I book a room?".

## Keeping it accurate

Everything the bot knows lives in `knowledge.md`. Update the `[PLACEHOLDER]`
fields (address, phone, booking link) and menu items there as real details
come in — no code changes needed, just restart/redeploy after editing.

## Security notes

- `.env` is gitignored — never commit real tokens/secrets.
- The webhook rejects any `POST` whose `X-Hub-Signature-256` doesn't match
  `APP_SECRET`, so it can't be spoofed by third parties.
- Rotate `PAGE_ACCESS_TOKEN`/`APP_SECRET` if they're ever exposed.
