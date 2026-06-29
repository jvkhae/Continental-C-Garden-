#!/usr/bin/env python3
"""Generate the QR code that links to the Continental C Garden food menu.

Usage:
    python3 generate_qr.py [URL]

If no URL is given, it defaults to the GitHub Pages address for this repo.
Outputs menu-qr.png (and menu-qr.svg).
"""
import sys
import qrcode
from qrcode.image.svg import SvgPathImage

DEFAULT_URL = "https://jvkhae.github.io/continental-c-garden-/"


def main() -> None:
    url = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_URL

    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=12,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    # PNG (dark green on cream to match the menu theme)
    img = qr.make_image(fill_color="#1f3b2c", back_color="#f7f4ee")
    img.save("menu-qr.png")

    # SVG (scalable, for print)
    svg = qr.make_image(image_factory=SvgPathImage)
    svg.save("menu-qr.svg")

    print(f"QR code generated for: {url}")
    print("  -> menu-qr.png")
    print("  -> menu-qr.svg")


if __name__ == "__main__":
    main()
