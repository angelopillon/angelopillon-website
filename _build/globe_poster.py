"""Renders assets/img/globe-poster.webp: the first frame of the client globe, shown before
three.js arrives and kept for browsers without WebGL.

It draws the real globe (assets/js/globe.js, built by _build/js/bundle.mjs) in headless Chrome,
with reduced motion on so the frame is the one the live globe starts from, and keeps the
transparency so the poster sits on the page like the canvas does.

    python3 -m http.server 8822 --bind 127.0.0.1   # from the repository root
    python3 _build/globe_poster.py
"""
import asyncio
import base64
import io
import sys
from pathlib import Path

from PIL import Image
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "img" / "globe-poster.webp"
BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8822"
BOX, DPR, SIDE = 720, 2, 840

PAGE = f"""<!doctype html><html><head><meta charset="utf-8"><style>html,body{{margin:0;background:transparent}}
.ah-globe{{position:relative;width:{BOX}px;height:{BOX}px}} canvas{{position:absolute;inset:0;width:100%;height:100%}}</style>
<script>
const gc = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, attrs) {{ return gc.call(this, type, Object.assign({{}}, attrs, {{ preserveDrawingBuffer: true }})); }};
</script></head><body><div class="ah-globe" data-globe><canvas></canvas></div>
<script src="{BASE}/assets/js/globe.js"></script></body></html>"""


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"])
        ctx = await b.new_context(viewport={"width": BOX, "height": BOX}, device_scale_factor=DPR, reduced_motion="reduce")
        pg = await ctx.new_page()
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto(BASE + "/404.html")
        await pg.set_content(PAGE, wait_until="networkidle")
        await pg.wait_for_selector(".ah-globe.is-live", timeout=20000)
        await pg.wait_for_timeout(400)
        url = await pg.evaluate("document.querySelector('canvas').toDataURL('image/png')")
        await b.close()
    if errs:
        raise SystemExit("globe errors: " + "; ".join(errs))
    im = Image.open(io.BytesIO(base64.b64decode(url.split(",", 1)[1]))).convert("RGBA")
    im = im.resize((SIDE, SIDE), Image.LANCZOS)
    im.save(OUT, "WEBP", quality=74, method=6, alpha_quality=85)
    print(f"{OUT.relative_to(ROOT)}  {OUT.stat().st_size // 1024} KB")


if __name__ == "__main__":
    asyncio.run(main())
