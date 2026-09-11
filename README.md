# C Garden — QR Food Menu

A single-page, mobile-friendly **food menu website** plus a **QR code** that links straight to it. Scan the QR with any phone camera and the menu opens — no app needed.

> The menu currently has **3 placeholder dishes**. Send me the real food details anytime and I'll swap them in — the QR code does **not** change.

Also includes a general hotel **landing page** (`promo.html`), a **social media marketing pack** (`social/`), and an **AI Messenger chatbot** (`chatbot/`) — see below.

## What's here

| File | Purpose |
|------|---------|
| `index.html` | The C Garden menu website (self-contained, no build step) |
| `promo.html` | General "The Continental Hotel" landing page — links to the menu, placeholder amenities/contact info |
| `menu-qr.png` | QR code image (raster — for screens/quick print) |
| `menu-qr.svg` | QR code (vector — for high-quality / large print) |
| `generate_qr.py` | Regenerates the QR codes |
| `social/marketing-plan.md` | Social media strategy — goals, pillars, posting cadence, sample calendar |
| `social/captions.md` | Ready-to-post captions/copy per content pillar, with hashtags |
| `chatbot/` | Claude-powered Facebook Messenger chatbot for the Page (see `chatbot/README.md` to deploy) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

Facebook poster + 3 square social post graphics are published as an editable design canvas (see `social/marketing-plan.md` for the link) — open it to export PNGs for posting.

## How it works

The QR code encodes a URL. When scanned, the phone opens that URL, which loads the menu page. So the website needs to be hosted somewhere public — the simplest free option is **GitHub Pages**.

## Publish the menu (GitHub Pages)

1. Push this branch to GitHub (already done by the assistant).
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch `claude/qr-food-menu-website-dul29g` (or merge into `main` and pick `main`) and folder `/ (root)`. Save.
5. After a minute the menu is live at:

   ```
   https://jvkhae.github.io/continental-c-garden-/
   ```

The included QR code already points to that address.

> If you publish from a **different** URL (custom domain, Netlify, etc.), regenerate the QR (see below) so it points to the right place.

## Regenerate the QR code

Requires Python with the `qrcode` package (`pip install "qrcode[pil]"`):

```bash
# Default URL (GitHub Pages address above)
python3 generate_qr.py

# Or a custom URL
python3 generate_qr.py "https://your-domain.com/menu"
```

This rewrites `menu-qr.png` and `menu-qr.svg`.

## Editing the menu

All menu items, prices, and sections live directly in `index.html`. Edit the
text, save, and re-publish — the QR code stays the same as long as the URL
doesn't change.
