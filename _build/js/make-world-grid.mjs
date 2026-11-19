// Regular latitude/longitude grid of land points for the static world map on the home (no WebGL, nothing moves).
import fs from "node:fs";
import { geoContains } from "d3-geo";
import { feature } from "topojson-client";
const topo = JSON.parse(fs.readFileSync(new URL("./node_modules/world-atlas/land-110m.json", import.meta.url)));
const land = feature(topo, topo.objects.land);
const STEP = 1.6, out = [];
for (let lat = 78; lat >= -56; lat -= STEP) {
  for (let lon = -180 + STEP / 2; lon < 180; lon += STEP) {
    if (geoContains(land, [lon, lat])) out.push(+lat.toFixed(2), +lon.toFixed(2));
  }
}
fs.writeFileSync(new URL("./world-grid.json", import.meta.url), JSON.stringify({ step: STEP, land: out }));
console.log("land points:", out.length / 2);
