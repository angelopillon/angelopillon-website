// Precomputes land dots (Fibonacci sphere, kept on land) and client city points for the WebGL globe.
import fs from "node:fs";
import { geoContains } from "d3-geo";
import { feature } from "topojson-client";
const topo = JSON.parse(fs.readFileSync(new URL("./node_modules/world-atlas/land-110m.json", import.meta.url)));
const land = feature(topo, topo.objects.land);
const N = 26000, out = [];
const golden = Math.PI * (3 - Math.sqrt(5));
for (let i = 0; i < N; i++) {
  const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = golden * i;
  const lat = Math.asin(y) * 180 / Math.PI;
  const lon = ((Math.atan2(Math.sin(th) * r, Math.cos(th) * r) * 180 / Math.PI) + 540) % 360 - 180;
  if (lat < -58) continue; // skip Antarctica for a cleaner silhouette
  if (geoContains(land, [lon, lat])) out.push(+lat.toFixed(2), +lon.toFixed(2));
}
const cities = [
  ["AL",41.33,19.82],["AR",-34.6,-58.38],["AU",-33.87,151.21],["AT",48.21,16.37],["BD",23.81,90.41],["BE",50.85,4.35],["BA",43.86,18.41],
  ["BR",-23.55,-46.63],["BG",42.7,23.32],["KH",11.56,104.92],["CA",43.65,-79.38],["CL",-33.45,-70.67],["CO",4.71,-74.07],["CR",9.93,-84.08],
  ["HR",45.81,15.98],["CU",23.11,-82.37],["CZ",50.08,14.44],["DK",55.68,12.57],["DO",18.49,-69.93],["EE",59.44,24.75],["FI",60.17,24.94],
  ["FR",48.86,2.35],["GE",41.72,44.78],["DE",52.52,13.4],["GR",37.98,23.73],["GT",14.63,-90.51],["HU",47.5,19.04],["IS",64.15,-21.94],
  ["IN",19.08,72.88],["ID",-6.21,106.85],["IE",53.35,-6.26],["IL",32.08,34.78],["IT",41.9,12.5],["LV",56.95,24.11],["LT",54.69,25.28],
  ["LU",49.61,6.13],["MK",42.0,21.43],["MY",3.14,101.69],["ME",42.44,19.26],["MM",16.84,96.17],["NL",52.37,4.9],["NZ",-36.85,174.76],
  ["OM",23.59,58.41],["PG",-9.44,147.18],["PL",52.23,21.01],["PT",38.72,-9.14],["RS",44.79,20.45],["RO",44.43,26.1],["SA",24.71,46.68],
  ["SK",48.15,17.11],["SI",46.06,14.51],["ZA",-26.2,28.05],["KR",37.57,126.98],["ES",40.42,-3.7],["SE",59.33,18.07],["CH",47.37,8.54],
  ["TW",25.03,121.57],["TH",13.76,100.5],["TR",41.01,28.98],["AE",25.2,55.27],["GB",51.51,-0.13],["US",40.71,-74.01],["US",34.05,-118.24],
  ["UY",-34.9,-56.16],["VE",10.48,-66.9],["VN",21.03,105.85]
];
fs.writeFileSync(new URL("./globe-data.json", import.meta.url), JSON.stringify({ origin: [45.46, 9.19], land: out, cities }));
console.log("land points:", out.length / 2, "cities:", cities.length, "bytes:", fs.statSync(new URL("./globe-data.json", import.meta.url)).size);
