# -*- coding: utf-8 -*-
"""Brand mark of angelopillon.com: the transient.

Four rounded bars that fall away from a tall first one, the attack of a sound and its decay.
Everything here is drawn from the same few numbers, as SVG for the pages and with Pillow for
the PNG icons, so the mark is identical everywhere.
"""
import math
from pathlib import Path
from PIL import Image, ImageDraw

BAR_W = 7.0
GAP = 5.0
HEIGHTS = (56.0, 38.0, 25.0, 15.0)
MARK_W = len(HEIGHTS) * BAR_W + (len(HEIGHTS) - 1) * GAP   # 43
MARK_H = max(HEIGHTS)                                      # 56
# heavier cut for 16 to 48 px: three bars, so each one keeps at least two pixels
SMALL = dict(bar=9.0, gap=5.0, heights=(56.0, 34.0, 18.0))

WHITE, SILVER = "#FFFFFF", "#D2D2D7"
INK, INK_DARK = "#F5F5F7", "#1D1D1F"
TILE_TOP, TILE_BOTTOM = "#2C2C2E", "#0B0B0C"


def bars(bar=BAR_W, gap=GAP, heights=HEIGHTS):
    """(x, y, w, h) of each bar, centred on the mark's horizontal axis."""
    top = max(heights)
    return [(i * (bar + gap), (top - h) / 2, bar, h) for i, h in enumerate(heights)]


def size_of(bar=BAR_W, gap=GAP, heights=HEIGHTS):
    return len(heights) * bar + (len(heights) - 1) * gap, max(heights)


def _f(v):
    return (f"{v:.3f}").rstrip("0").rstrip(".")


def rects(fill=None, **kw):
    f = f' fill="{fill}"' if fill else ""
    return "".join(f'<rect x="{_f(x)}" y="{_f(y)}" width="{_f(w)}" height="{_f(h)}" rx="{_f(w / 2)}"{f}/>' for x, y, w, h in bars(**kw))


def mark_svg(fill="currentColor", cls="", label=None):
    """Inline mark for the pages. Inherits the text colour unless a fill is given."""
    a = f' role="img" aria-label="{label}"' if label else ' aria-hidden="true" focusable="false"'
    c = f' class="{cls}"' if cls else ""
    return f'<svg{c} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {_f(MARK_W)} {_f(MARK_H)}"{a}><g fill="{fill}">{rects()}</g></svg>'


def squircle_pts(size, n=5.0, steps=720, pad=0.0):
    a, c = size / 2 - pad, size / 2
    pts = []
    for i in range(steps):
        t = 2 * math.pi * i / steps
        ct, st = math.cos(t), math.sin(t)
        pts.append((c + a * math.copysign(abs(ct) ** (2 / n), ct), c + a * math.copysign(abs(st) ** (2 / n), st)))
    return pts


def _placement(size, ratio, small):
    kw = SMALL if small else {}
    w, h = size_of(**kw)
    sc = size * ratio / max(w, h)
    # optical centre: the tall first bar pulls the eye left, so the mark sits a little right of the box centre
    tx = (size - w * sc) / 2 + size * 0.03
    ty = (size - h * sc) / 2
    return kw, sc, tx, ty


def icon_svg(size=64, ratio=0.56, small=False, full_bleed=False):
    kw, sc, tx, ty = _placement(size, ratio, small)
    h = size_of(**kw)[1]
    shape = (f'<rect width="{size}" height="{size}" fill="url(#t)"/>' if full_bleed else
             '<path d="M' + " L".join(f"{_f(x)} {_f(y)}" for x, y in squircle_pts(size, steps=240)) + 'Z" fill="url(#t)"/>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}">'
            f'<defs><linearGradient id="t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{TILE_TOP}"/><stop offset="1" stop-color="{TILE_BOTTOM}"/></linearGradient>'
            f'<linearGradient id="m" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="{_f(h)}"><stop offset="0" stop-color="{WHITE}"/><stop offset="1" stop-color="{SILVER}"/></linearGradient></defs>'
            f'{shape}<g transform="translate({_f(tx)} {_f(ty)}) scale({_f(sc)})" fill="url(#m)">{rects(**kw)}</g></svg>')


def _hex(c):
    c = c.lstrip("#")
    return tuple(int(c[i:i + 2], 16) for i in (0, 2, 4))


def _vgrad(w, h, top, bottom, y0=0, y1=None):
    y1 = h if y1 is None else y1
    a, b = _hex(top), _hex(bottom)
    col = Image.new("RGB", (1, h))
    for y in range(h):
        t = min(1, max(0, (y - y0) / max(1, y1 - y0)))
        col.putpixel((0, y), tuple(int(a[k] + (b[k] - a[k]) * t) for k in range(3)))
    return col.resize((w, h))


def render_icon(size, ratio=0.56, small=False, full_bleed=False, ss=8):
    """PNG icon drawn with Pillow at ss times the size, then scaled down for clean edges."""
    S = size * ss
    kw, sc, tx, ty = _placement(S, ratio, small)
    tile = _vgrad(S, S, TILE_TOP, TILE_BOTTOM)
    tmask = Image.new("L", (S, S), 255 if full_bleed else 0)
    if not full_bleed:
        ImageDraw.Draw(tmask).polygon(squircle_pts(S, steps=1440), fill=255)
    h = size_of(**kw)[1]
    mark = _vgrad(S, S, WHITE, SILVER, int(ty), int(ty + h * sc))
    mmask = Image.new("L", (S, S), 0)
    d = ImageDraw.Draw(mmask)
    for x, y, w, hh in bars(**kw):
        x0, y0 = tx + x * sc, ty + y * sc
        d.rounded_rectangle((x0, y0, x0 + w * sc, y0 + hh * sc), radius=w * sc / 2, fill=255)
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    im.paste(tile, (0, 0), tmask)
    im.paste(mark, (0, 0), mmask)
    return im.resize((size, size), Image.LANCZOS)


def draw_mark(im, x, y, height, color=(245, 245, 247), ss=4):
    """Draws the mark onto a Pillow image, top-left at (x, y). Returns its width."""
    sc = height / MARK_H
    W, H = int(MARK_W * sc * ss) + 2, int(MARK_H * sc * ss) + 2
    m = Image.new("L", (W, H), 0)
    d = ImageDraw.Draw(m)
    for bx, by, bw, bh in bars():
        d.rounded_rectangle((bx * sc * ss, by * sc * ss, (bx + bw) * sc * ss, (by + bh) * sc * ss), radius=bw * sc * ss / 2, fill=255)
    m = m.resize((W // ss, H // ss), Image.LANCZOS)
    im.paste(Image.new("RGB", m.size, color), (int(x), int(y)), m)
    return MARK_W * sc


def lockup_svg(ink=INK, ink2="#86868B"):
    """Horizontal logo with name and line, as SVG text in the site font (for print and docs, the PNGs are safer)."""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 64">'
            f'<g transform="translate(0 4)" fill="{ink}">{rects()}</g>'
            f'<text x="66" y="33" font-family="Mona Sans, -apple-system, Helvetica, Arial, sans-serif" font-weight="620" font-size="27" letter-spacing="-0.3" fill="{ink}">Angelo Pillon</text>'
            f'<text x="67" y="55" font-family="Mona Sans, -apple-system, Helvetica, Arial, sans-serif" font-weight="460" font-size="13.5" fill="{ink2}">Mixing &amp; Mastering</text></svg>')


def icons(out_dir):
    """Every icon the site and Google use, rebuilt on each build."""
    out = Path(out_dir)
    (out / "assets/img/logo").mkdir(parents=True, exist_ok=True)
    render_icon(512).save(out / "assets/img/icon-512.png", optimize=True)
    render_icon(192, ratio=0.58).save(out / "assets/img/icon-192.png", optimize=True)
    render_icon(512, ratio=0.46, full_bleed=True).save(out / "assets/img/icon-maskable-512.png", optimize=True)
    render_icon(180, ratio=0.54, full_bleed=True).convert("RGB").save(out / "apple-touch-icon.png", optimize=True)
    smalls = [render_icon(s, ratio=0.66, small=True) for s in (48, 32, 16)]
    smalls[0].save(out / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)], append_images=smalls[1:])
    render_icon(48, ratio=0.66, small=True).save(out / "assets/img/favicon-48.png", optimize=True)
    render_icon(96, ratio=0.6).save(out / "assets/img/favicon-96.png", optimize=True)
    (out / "favicon.svg").write_text(icon_svg(64, ratio=0.66, small=True))
    # Google Business Profile: full square, the mark stays whole in the round crop of Maps
    render_icon(720, ratio=0.46, full_bleed=True).convert("RGB").save(out / "assets/img/logo/google-business-logo-720.png", optimize=True)
    L = out / "assets/img/logo"
    (L / "logo-mark-white.svg").write_text(mark_svg(INK).replace(' aria-hidden="true" focusable="false"', ""))
    (L / "logo-mark-black.svg").write_text(mark_svg(INK_DARK).replace(' aria-hidden="true" focusable="false"', ""))
    (L / "logo-icon.svg").write_text(icon_svg(512))
