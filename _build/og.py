# -*- coding: utf-8 -*-
"""Open Graph images (1200x630) and app icons, drawn with Pillow in the Rack style."""
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
CACHE = ROOT / "_build" / ".cache"
CHASSIS, LEGEND, LEGEND2, GLASS, EDGE, VFD = (220, 221, 216), (20, 21, 24), (83, 87, 94), (12, 18, 16), (39, 49, 45), (124, 242, 220)
CAPS = {"loudness": (194, 69, 47), "mastering": (138, 106, 62), "mixing": (47, 95, 167), "electronic": (62, 126, 91), "tutorial": (59, 62, 68)}


def _static(src, name, axes):
    CACHE.mkdir(parents=True, exist_ok=True)
    out = CACHE / f"{name}.ttf"
    if not out.exists():
        f = TTFont(src)
        f.flavor = None
        inst = instancer.instantiateVariableFont(f, axes)
        inst.save(out)
    return str(out)


def fonts():
    mona = ROOT / "assets/fonts/mona-sans-vf.woff2"
    hubot = ROOT / "assets/fonts/hubot-sans-vf.woff2"
    return {
        "display": _static(mona, "mona-125-800", {"wdth": 125, "wght": 800}),
        "title": _static(mona, "mona-116-760", {"wdth": 116, "wght": 760}),
        "label": _static(mona, "mona-80-640", {"wdth": 80, "wght": 640}),
        "read": _static(hubot, "hubot-88-560", {"wdth": 88, "wght": 560}),
    }


def _wrap(draw, text, font, width):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=font) <= width:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def og_image(path, title, kicker="", cat=None, readout="angelopillon.com"):
    F = fonts()
    W, H = 1200, 630
    im = Image.new("RGB", (W, H), CHASSIS)
    d = ImageDraw.Draw(im)
    d.text((80, 64), "Angelo Pillon", font=ImageFont.truetype(F["display"], 30), fill=LEGEND)
    y = 128
    if kicker:
        lab = ImageFont.truetype(F["label"], 28)
        x = 80
        if cat in CAPS:
            d.rounded_rectangle((80, y + 8, 98, y + 26), radius=4, fill=CAPS[cat])
            x = 112
        d.text((x, y), kicker, font=lab, fill=LEGEND2)
        y += 56
    size = 72
    while size > 40:
        f = ImageFont.truetype(F["title"], size)
        lines = _wrap(d, title, f, 1040)
        if len(lines) <= 3:
            break
        size -= 4
    lh = int(size * 1.06)
    for i, ln in enumerate(lines[:3]):
        d.text((80, y + i * lh), ln, font=f, fill=LEGEND)
    # glass strip with a loudness trace
    d.rounded_rectangle((80, 468, 1120, 566), radius=16, fill=GLASS, outline=EDGE, width=2)
    d.text((112, 500), readout, font=ImageFont.truetype(F["read"], 30), fill=VFD)
    pts = []
    for i in range(121):
        x = i / 120
        v = (0.25 + x * 3) if x < 0.12 else (0.55 + 0.06 * math.sin(i * 0.7)) if x < 0.42 else (0.42 + 0.05 * math.sin(i)) if x < 0.52 else (0.8 + 0.05 * math.sin(i * 0.9)) if x < 0.86 else (0.62 - (x - 0.86) * 2)
        v = max(0.05, min(0.95, v))
        pts.append((640 + x * 450, 552 - v * 70))
    d.line([(640, 517), (1090, 517)], fill=(40, 90, 82), width=2)
    d.line(pts, fill=VFD, width=3, joint="curve")
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, optimize=True)


def icons(out_dir):
    """App icons: AP monogram engraved on a chassis plate with the LED dot."""
    F = fonts()
    out_dir = Path(out_dir)

    def plate(size, maskable=False):
        im = Image.new("RGBA", (size, size), CHASSIS + (255,))
        d = ImageDraw.Draw(im)
        if not maskable:
            im = Image.new("RGBA", (size, size), (0, 0, 0, 0))
            d = ImageDraw.Draw(im)
            d.rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * 0.22), fill=CHASSIS + (255,))
        s = 0.62 if maskable else 0.74
        f = ImageFont.truetype(F["display"], int(size * 0.42 * s / 0.74))
        tw = d.textlength("AP", font=f)
        bbox = d.textbbox((0, 0), "AP", font=f)
        th = bbox[3] - bbox[1]
        x = (size - tw) / 2
        yy = (size - th) / 2 - bbox[1] + size * 0.02
        d.text((x, yy), "AP", font=f, fill=LEGEND)
        r = size * 0.045 * s / 0.74
        cx, cy = x + tw + r * 1.6, yy + bbox[1] + r
        d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=VFD)
        return im
    plate(512).save(out_dir / "assets/img/icon-512.png", optimize=True)
    plate(192).save(out_dir / "assets/img/icon-192.png", optimize=True)
    plate(512, maskable=True).save(out_dir / "assets/img/icon-maskable-512.png", optimize=True)
    plate(180, maskable=True).convert("RGB").save(out_dir / "apple-touch-icon.png", optimize=True)
    fav = plate(64)
    fav.save(out_dir / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
