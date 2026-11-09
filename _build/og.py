# -*- coding: utf-8 -*-
"""Open Graph images (1200x630) and app icons, drawn with Pillow in the Rack style."""
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
CACHE = ROOT / "_build" / ".cache"
BG, INK, INK2, VFD = (0, 0, 0), (245, 245, 247), (161, 161, 170), (124, 242, 220)
SPEC = [(77, 107, 255), (139, 77, 255), (255, 61, 165), (255, 106, 43), (255, 194, 75)]
CAPS = {"loudness": (255, 106, 43), "mastering": (255, 194, 75), "mixing": (139, 77, 255), "electronic": (34, 211, 238), "tutorial": (255, 61, 165), "news": (163, 230, 53)}


def spec(t):
    t = max(0.0, min(1.0, t)) * (len(SPEC) - 1)
    i = min(int(t), len(SPEC) - 2)
    f = t - i
    a, b = SPEC[i], SPEC[i + 1]
    return tuple(int(a[k] + (b[k] - a[k]) * f) for k in range(3))


def _glow(W, H, blobs):
    from PIL import ImageFilter
    layer = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(layer)
    for (cx, cy, r, col) in blobs:
        d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=col)
    return layer.filter(ImageFilter.GaussianBlur(radius=110))


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
        "display": _static(mona, "mona-108-780", {"wdth": 108, "wght": 780}),
        "title": _static(mona, "mona-104-780", {"wdth": 104, "wght": 780}),
        "label": _static(mona, "mona-100-620", {"wdth": 100, "wght": 620}),
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
    tint = CAPS.get(cat, SPEC[1])
    im = _glow(W, H, [(980, 80, 260, tuple(int(c * 0.55) for c in tint)), (1150, 520, 220, (90, 30, 120)), (200, 700, 260, (20, 40, 140))])
    d = ImageDraw.Draw(im)
    d.text((80, 64), "Angelo Pillon", font=ImageFont.truetype(F["display"], 30), fill=INK)
    y = 132
    if kicker:
        lab = ImageFont.truetype(F["label"], 26)
        x = 80
        if cat in CAPS:
            d.ellipse((80, y + 9, 96, y + 25), fill=CAPS[cat])
            x = 110
        d.text((x, y), kicker, font=lab, fill=INK2)
        y += 58
    size = 76
    while size > 40:
        f = ImageFont.truetype(F["title"], size)
        lines = _wrap(d, title, f, 1040)
        if len(lines) <= 3:
            break
        size -= 4
    lh = int(size * 1.02)
    for i, ln in enumerate(lines[:3]):
        d.text((80, y + i * lh), ln, font=f, fill=INK)
    # spectrum trace and readout
    d.text((80, 520), readout, font=ImageFont.truetype(F["read"], 28), fill=INK2)
    pts = []
    for i in range(161):
        x = i / 160
        env = math.exp(-((x - 0.5) ** 2) / 0.06)
        v = 0.5 + env * 0.42 * math.sin(x * 26) + 0.05 * math.sin(x * 71)
        pts.append((560 + x * 560, 560 - v * 80))
    for i in range(len(pts) - 1):
        d.line([pts[i], pts[i + 1]], fill=spec(i / (len(pts) - 1)), width=4)
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, optimize=True)


def icons(out_dir):
    """App icons: AP monogram engraved on a chassis plate with the LED dot."""
    F = fonts()
    out_dir = Path(out_dir)

    def plate(size, maskable=False):
        im = Image.new("RGBA", (size, size), (0, 0, 0, 255))
        d = ImageDraw.Draw(im)
        if not maskable:
            im = Image.new("RGBA", (size, size), (0, 0, 0, 0))
            d = ImageDraw.Draw(im)
            d.rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * 0.22), fill=(0, 0, 0, 255))
        s = 0.62 if maskable else 0.74
        f = ImageFont.truetype(F["display"], int(size * 0.44 * s / 0.74))
        tw = d.textlength("AP", font=f)
        bbox = d.textbbox((0, 0), "AP", font=f)
        th = bbox[3] - bbox[1]
        x = (size - tw) / 2
        yy = (size - th) / 2 - bbox[1] + size * 0.02
        d.text((x, yy), "AP", font=f, fill=INK)
        r = size * 0.05 * s / 0.74
        cx, cy = x + tw + r * 1.5, yy + bbox[1] + r
        d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=SPEC[2])
        return im
    plate(512).save(out_dir / "assets/img/icon-512.png", optimize=True)
    plate(192).save(out_dir / "assets/img/icon-192.png", optimize=True)
    plate(512, maskable=True).save(out_dir / "assets/img/icon-maskable-512.png", optimize=True)
    plate(180, maskable=True).convert("RGB").save(out_dir / "apple-touch-icon.png", optimize=True)
    fav = plate(64)
    fav.save(out_dir / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
