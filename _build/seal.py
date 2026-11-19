# -*- coding: utf-8 -*-
"""The studio seal: a gold medallion with a graduated bezel, the studio's name set around a
black dial and the transient mark in the middle. Shown next to the Apple Digital Masters
certification on the home.

The lettering is converted to outlines here (Mona Sans from assets/fonts), so the seal looks the
same on every device. Run once after changing it:

    python3 _build/seal.py

It writes assets/img/logo/seal.svg; the build inlines that file on the home.
"""
import io
import math
from pathlib import Path

import uharfbuzz as hb
from fontTools.misc.transform import Transform
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

import brand

ROOT = Path(__file__).resolve().parent.parent
FONT = ROOT / "assets" / "fonts" / "mona-sans-vf.woff2"
OUT = ROOT / "assets" / "img" / "logo" / "seal.svg"

TOP, BOTTOM = "ANGELO PILLON", "MILANO"
C = 50.0                  # centre of the 100 x 100 drawing
BAND = (29.3, 33.4)       # inner and outer radius of the lettering band
SIZE, WGHT, WDTH = 5.7, 640, 100


def _f(v):
    return (f"{v:.2f}").rstrip("0").rstrip(".")


def _font():
    tt = TTFont(str(FONT))
    tt.flavor = None
    raw = io.BytesIO()
    tt.save(raw)
    data = raw.getvalue()
    inst = instancer.instantiateVariableFont(TTFont(io.BytesIO(data)), {"wght": WGHT, "wdth": WDTH})
    face = hb.Face(hb.Blob(data))
    font = hb.Font(face)
    font.set_variations({"wght": WGHT, "wdth": WDTH})
    return font, face.upem, inst


def arc_text(text, tracking, top=True):
    """Lettering on an arc, centred at 12 o'clock (tops outwards) or at 6 o'clock (tops inwards,
    so it reads upright). tracking in em."""
    font, upem, inst = _font()
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(font, buf, {"kern": True})
    sc = SIZE / upem
    order, gs = inst.getGlyphOrder(), inst.getGlyphSet()
    glyphs = [(order[i.codepoint], p.x_advance * sc) for i, p in zip(buf.glyph_infos, buf.glyph_positions)]
    track = tracking * SIZE
    width = sum(a for _, a in glyphs) + track * (len(glyphs) - 1)
    r = BAND[0] if top else BAND[1]          # the baseline: inner edge on top, outer edge below
    pen = SVGPathPen(gs, ntos=_f)
    x = 0.0
    for name, adv in glyphs:
        off = (x + adv / 2 - width / 2) / r
        phi = off if top else math.pi - off
        rot = phi if top else phi - math.pi
        t = (Transform().translate(C + r * math.sin(phi), C - r * math.cos(phi))
             .rotate(rot).translate(-adv / 2, 0).scale(sc, -sc))
        gs[name].draw(TransformPen(pen, t))
        x += adv + track
    return pen.getCommands(), math.degrees(width / r)


def seal_svg():
    d_top, span_top = arc_text(TOP, 0.2, top=True)
    d_bot, span_bot = arc_text(BOTTOM, 0.42, top=False)
    mid = sum(BAND) / 2
    dots = "".join(f'<circle cx="{_f(C + mid * math.sin(math.radians(a)))}" cy="{_f(C - mid * math.cos(math.radians(a)))}" r=".95"/>' for a in (90, 270))
    ticks = []
    for k in range(60):
        major = k % 5 == 0
        r0, r1, w = (42.4, 48.0, 1.15) if major else (43.9, 47.0, .55)
        a = math.radians(k * 6)
        s, c = math.sin(a), math.cos(a)
        ticks.append(f'<path d="M{_f(C + r0 * s)} {_f(C - r0 * c)}L{_f(C + r1 * s)} {_f(C - r1 * c)}" stroke-width="{w}"/>')
    mh = 19.0
    sc = mh / brand.MARK_H
    mx = C - brand.MARK_W * sc / 2 + 0.6
    my = C - mh / 2
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="ah-adm__seal" aria-hidden="true" focusable="false">'
        '<defs>'
        '<linearGradient id="sg-gold" x1="0" y1="0" x2="1" y2="1">'
        '<stop offset="0" stop-color="#F7E7BC"/><stop offset=".28" stop-color="#D2AE63"/><stop offset=".52" stop-color="#F3DEA6"/>'
        '<stop offset=".74" stop-color="#C39C52"/><stop offset="1" stop-color="#8F6E33"/></linearGradient>'
        '<radialGradient id="sg-dial" cx=".5" cy=".36" r=".72"><stop offset="0" stop-color="#2A2A2E"/><stop offset=".7" stop-color="#121214"/><stop offset="1" stop-color="#070708"/></radialGradient>'
        '<linearGradient id="sg-ink" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F3DFAA"/><stop offset="1" stop-color="#C9A55B"/></linearGradient>'
        '<radialGradient id="sg-shine" cx=".32" cy=".18" r=".62"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>'
        '</defs>'
        f'<circle cx="{_f(C)}" cy="{_f(C)}" r="49.4" fill="url(#sg-gold)"/>'
        f'<circle cx="{_f(C)}" cy="{_f(C)}" r="49.1" fill="none" stroke="#5A4520" stroke-opacity=".55" stroke-width=".6"/>'
        f'<g stroke="#3B2E14" stroke-opacity=".62" stroke-linecap="round">{"".join(ticks)}</g>'
        f'<circle cx="{_f(C)}" cy="{_f(C)}" r="41.3" fill="url(#sg-dial)"/>'
        f'<circle cx="{_f(C)}" cy="{_f(C)}" r="41.3" fill="none" stroke="#2A2010" stroke-width="1.1"/>'
        f'<circle cx="{_f(C)}" cy="{_f(C)}" r="40.6" fill="none" stroke="#F3DEA6" stroke-opacity=".22" stroke-width=".5"/>'
        f'<circle cx="{_f(C)}" cy="{_f(C)}" r="36.4" fill="none" stroke="#D4B26A" stroke-opacity=".5" stroke-width=".45"/>'
        f'<circle cx="{_f(C)}" cy="{_f(C)}" r="26.4" fill="none" stroke="#D4B26A" stroke-opacity=".32" stroke-width=".45"/>'
        f'<path d="{d_top}{d_bot}" fill="url(#sg-ink)"/><g fill="#D4B26A">{dots}</g>'
        f'<g transform="translate({_f(mx)} {_f(my)}) scale({sc:.4f})" fill="url(#sg-ink)">{brand.rects()}</g>'
        f'<circle cx="{_f(C)}" cy="{_f(C)}" r="41.3" fill="url(#sg-shine)"/>'
        '</svg>'
    )


if __name__ == "__main__":
    svg = seal_svg()
    OUT.write_text(svg, encoding="utf-8")
    print(f"{OUT.relative_to(ROOT)}  {len(svg) // 1024} KB")
