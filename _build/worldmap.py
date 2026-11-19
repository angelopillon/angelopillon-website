# -*- coding: utf-8 -*-
"""Static world map for the home: land as a grid of dots, client cities in white, Milan marked.

No WebGL and nothing that moves. Drawn once with Pillow into assets/img/world-clients.{webp,jpg}.
"""
import json
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

B = Path(__file__).resolve().parent
ROOT = B.parent
LAT_TOP, LAT_BOT = 80.0, -58.0


def render(width=2000, ss=2):
    grid = json.loads((B / "js/world-grid.json").read_text())
    data = json.loads((B / "js/globe-data.json").read_text())
    W = width * ss
    H = int(W * (LAT_TOP - LAT_BOT) / 360)
    proj = lambda lat, lon: ((lon + 180) / 360 * W, (LAT_TOP - lat) / (LAT_TOP - LAT_BOT) * H)
    im = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    step_px = grid["step"] / 360 * W
    r = step_px * 0.24
    land = grid["land"]
    for i in range(0, len(land), 2):
        x, y = proj(land[i], land[i + 1])
        d.ellipse((x - r, y - r, x + r, y + r), fill=(72, 72, 76, 255))
    # faint arcs from Milan
    oy, ox = proj(*data["origin"])[1], proj(*data["origin"])[0]
    arcs = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    da = ImageDraw.Draw(arcs)
    for code, lat, lon in data["cities"]:
        x, y = proj(lat, lon)
        dist = math.hypot(x - ox, y - oy)
        if dist < step_px * 2:
            continue
        mx, my = (ox + x) / 2, (oy + y) / 2 - dist * 0.22
        pts = []
        for k in range(41):
            t = k / 40
            pts.append(((1 - t) ** 2 * ox + 2 * (1 - t) * t * mx + t * t * x, (1 - t) ** 2 * oy + 2 * (1 - t) * t * my + t * t * y))
        da.line(pts, fill=(255, 255, 255, 34), width=max(1, int(1.2 * ss)))
    im = Image.alpha_composite(im, arcs)
    # client cities: soft halo, then a crisp white dot
    halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    dh = ImageDraw.Draw(halo)
    for code, lat, lon in data["cities"]:
        x, y = proj(lat, lon)
        R = step_px * 0.9
        dh.ellipse((x - R, y - R, x + R, y + R), fill=(255, 255, 255, 90))
    halo = halo.filter(ImageFilter.GaussianBlur(step_px * 0.6))
    im = Image.alpha_composite(im, halo)
    d = ImageDraw.Draw(im)
    for code, lat, lon in data["cities"]:
        x, y = proj(lat, lon)
        R = step_px * 0.34
        d.ellipse((x - R, y - R, x + R, y + R), fill=(255, 255, 255, 255))
    # Milan: a ring around the dot
    R1, R2 = step_px * 0.95, step_px * 0.5
    d.ellipse((ox - R1, oy - R1, ox + R1, oy + R1), outline=(255, 255, 255, 255), width=max(2, int(1.6 * ss)))
    d.ellipse((ox - R2, oy - R2, ox + R2, oy + R2), fill=(255, 255, 255, 255))
    out = im.resize((width, int(H / ss)), Image.LANCZOS)
    flat = Image.new("RGB", out.size, (0, 0, 0))
    flat.paste(out, (0, 0), out)
    dst = ROOT / "assets/img"
    flat.save(dst / "world-clients.webp", quality=80, method=6)
    flat.save(dst / "world-clients.jpg", quality=82, optimize=True, progressive=True)
    return out.size


if __name__ == "__main__":
    print(render())
