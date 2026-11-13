/* angelopillon.com — "Cosmos": the WebGL universe behind the home page.
   One particle system that morphs with the scroll:
   0 galaxy → 1 noise (the big bang) → 2 sound wave → 3 spectrum → 4 the globe, with arcs from Milan to every client country.
   Scroll state arrives through window.__cosmos (written by motion.js). */
import {
  WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, BufferAttribute, Points, ShaderMaterial,
  AdditiveBlending, Color, Vector2, Vector3, Group, LineSegments, Sprite, SpriteMaterial, CanvasTexture, SRGBColorSpace, NoToneMapping
} from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import DATA from "./globe-data.json";

const S = (window.__cosmos = window.__cosmos || { p: 0, shift: 0, arcs: 0, active: true, dim: 0 });

const PALETTE = ["#3D5BFF", "#8B4DFF", "#FF3DA5", "#FF6A2B", "#FFC24B"];

function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GLSL_PALETTE = /* glsl */ `
uniform vec3 uPal[5];
vec3 pal(float t){
  t = clamp(t, 0.0, 1.0) * 4.0;
  if (t < 1.0) return mix(uPal[0], uPal[1], t);
  if (t < 2.0) return mix(uPal[1], uPal[2], t - 1.0);
  if (t < 3.0) return mix(uPal[2], uPal[3], t - 2.0);
  return mix(uPal[3], uPal[4], t - 3.0);
}
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
`;

const VERT = /* glsl */ `
attribute vec3 aP1; attribute vec3 aP2; attribute vec3 aP3; attribute vec3 aP4;
attribute vec3 aC0; attribute vec4 aR; attribute float aK;
uniform float uP, uT, uIntro, uPx, uScale, uTilt, uGRot, uGTilt, uGR, uFlash, uBoost;
uniform vec3 uGOff;
varying vec3 vCol; varying float vA;
${GLSL_PALETTE}

vec3 stagePos(float s){
  if (s < 0.5) {
    vec3 p = position;
    float r = length(p.xz);
    p = rotY(uT * (0.03 + 0.22 / (r + 0.9))) * p;
    return rotX(uTilt) * p;
  }
  if (s < 1.5) {
    vec3 p = aP1;
    float ph = aR.y * 6.2831;
    p += vec3(sin(uT * 0.55 + p.y * 0.8 + ph), sin(uT * 0.47 + p.z * 0.7 + ph * 1.3), cos(uT * 0.5 + p.x * 0.6 + ph * 0.7)) * 0.32;
    return p;
  }
  if (s < 2.5) {
    float x = aP2.x, st = aP2.y;
    float env = exp(-x * x / 20.0);
    float y = env * (1.25 + 0.25 * sin(uT * 0.8 + st)) * sin(x * 1.35 - uT * 1.7 + st * 0.62)
            + 0.16 * env * sin(x * 4.3 + uT * 2.4 + st);
    return vec3(x, y + aR.w * 0.05, aP2.z);
  }
  if (s < 3.5) {
    float bi = aP3.y;
    float h = 3.9 * (0.3 + 0.7 * pow(1.0 - bi, 0.55)) * (0.72 + 0.28 * sin(uT * 2.2 + bi * 17.0)) * (0.85 + 0.15 * sin(uT * 3.7 + bi * 41.0));
    return vec3(aP3.x, -1.35 + pow(aR.w, 0.8) * h, aP3.z);
  }
  vec3 g = rotX(uGTilt) * (rotY(uGRot) * aP4);
  return g * uGR + uGOff;
}

vec3 stageCol(float s){
  if (s < 0.5) return aC0;
  if (s < 1.5) return mix(vec3(1.0, 0.96, 0.92), pal(aR.y), 0.55 + 0.45 * step(0.7, aR.z));
  if (s < 2.5) return pal((aP2.x + 7.5) / 15.0);
  if (s < 3.5) return mix(pal(aP3.y), vec3(1.0), smoothstep(0.9, 1.0, aR.w) * 0.75);
  return aK < 0.5 ? mix(vec3(0.93, 0.95, 1.0), pal(0.08 + aR.y * 0.25), 0.35) : pal(0.02 + aR.y * 0.1) * 0.6;
}

float stageSize(float s){
  if (s < 0.5) return 0.85;
  if (s < 1.5) return 1.0;
  if (s < 2.5) return 1.15;
  if (s < 3.5) return 1.0;
  return aK < 0.5 ? 0.95 : 0.55;
}

float stageAlpha(float s){
  if (s < 0.5) return 0.34;
  if (s < 1.5) return 0.30;
  if (s < 2.5) return 0.62;
  if (s < 3.5) return 0.55;
  vec3 g = rotX(uGTilt) * (rotY(uGRot) * aP4);
  float facing = dot(normalize(g), normalize(cameraPosition - uGOff));
  float side = 0.18 + 0.82 * smoothstep(-0.2, 0.3, facing);
  return (aK < 0.5 ? 0.62 : 0.12) * side;
}

void main(){
  float p = clamp(uP, 0.0, 4.0);
  float i0 = floor(p);
  if (i0 > 3.0) i0 = 3.0;
  float f = p - i0;
  float d = aR.z * 0.38;
  float ff = smoothstep(d, d + 0.62, f);
  ff = ff * ff * (3.0 - 2.0 * ff);
  vec3 A = stagePos(i0), B = stagePos(i0 + 1.0);
  vec3 pos = mix(A, B, ff);
  float swirl = sin(ff * 3.14159);
  pos += normalize(pos + vec3(0.001)) * swirl * (aR.y - 0.5) * 1.4;

  // big bang on load: everything starts in a single point
  vec3 seed = (aR.xyz - 0.5) * 0.04;
  float k = uIntro;
  pos = mix(seed, pos, k);

  vCol = mix(stageCol(i0), stageCol(i0 + 1.0), ff);
  float sz = mix(stageSize(i0), stageSize(i0 + 1.0), ff);
  vA = mix(stageAlpha(i0), stageAlpha(i0 + 1.0), ff) * uBoost;
  float tw = 0.78 + 0.22 * sin(uT * (1.5 + aR.y * 2.5) + aR.z * 40.0);
  vA *= mix(tw, 1.0, step(1.5, p));
  float flash = uFlash + (1.0 - k) * 2.5;
  vCol = mix(vCol, vec3(1.0), clamp(flash * 0.35, 0.0, 0.8));

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = (0.5 + aR.x * 1.25) * sz * uPx * (uScale / -mv.z) * (1.0 + flash * 0.5);
}
`;

const FRAG = /* glsl */ `
varying vec3 vCol; varying float vA;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float a = smoothstep(0.5, 0.0, d);
  a = a * a;
  gl_FragColor = vec4(vCol, a * vA);
  #include <colorspace_fragment>
}
`;

const STAR_VERT = /* glsl */ `
attribute vec4 aR; uniform float uT, uPx; varying float vA; varying vec3 vCol; attribute vec3 aC;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  vA = 0.45 + 0.55 * (0.5 + 0.5 * sin(uT * (0.6 + aR.y * 2.0) + aR.z * 60.0));
  vCol = aC;
  gl_PointSize = (0.6 + aR.x * 1.9) * uPx;
}
`;

const ARC_VERT = /* glsl */ `
attribute float aT; attribute float aArc; varying float vT; varying float vArc; varying float vFace;
uniform vec3 uC;
void main(){
  vT = aT; vArc = aArc;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vFace = smoothstep(-0.25, 0.2, dot(normalize(w.xyz - uC), normalize(cameraPosition - w.xyz)));
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const ARC_FRAG = /* glsl */ `
uniform float uT, uArcs; varying float vT; varying float vArc; varying float vFace;
${GLSL_PALETTE}
void main(){
  float speed = 0.16 + fract(vArc * 7.13) * 0.16;
  float head = fract(uT * speed + vArc * 3.71) * 1.35;
  float dist = head - vT;
  float tail = 0.28;
  float glow = (dist >= 0.0 && dist < tail) ? pow(1.0 - dist / tail, 1.6) : 0.0;
  vec3 col = mix(pal(vArc), vec3(1.0), glow * 0.5);
  gl_FragColor = vec4(col, (0.07 + glow) * uArcs * (0.12 + 0.88 * vFace));
  #include <colorspace_fragment>
}
`;

const DOT_VERT = /* glsl */ `
attribute float aI; uniform float uT, uPx, uArcs; uniform vec3 uC; varying vec3 vCol; varying float vA;
${GLSL_PALETTE}
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float origin = step(aI, -0.5);
  float pulse = 0.5 + 0.5 * sin(uT * 2.2 + aI * 19.0);
  float hd = fract(uT * (0.16 + fract(aI * 7.13) * 0.16) + aI * 3.71) * 1.35;
  float hit = origin > 0.5 ? 0.0 : exp(-pow((hd - 1.0) * 7.0, 2.0));
  vCol = origin > 0.5 ? vec3(1.0) : mix(pal(aI), vec3(1.0), hit * 0.7);
  vec4 w = modelMatrix * vec4(position, 1.0);
  float face = smoothstep(-0.1, 0.25, dot(normalize(w.xyz - uC), normalize(cameraPosition - w.xyz)));
  vA = uArcs * face * (origin > 0.5 ? 1.0 : 0.6 + 0.3 * pulse + hit);
  gl_PointSize = uPx * (origin > 0.5 ? 10.0 + 3.0 * sin(uT * 3.0) : 4.0 + 2.0 * pulse + 9.0 * hit) * (9.0 / -mv.z);
}
`;

const COMET_VERT = /* glsl */ `
attribute vec3 aB; attribute float aSeed; attribute float aIdx;
uniform vec3 uO, uC; uniform float uT, uArcs, uPx;
varying vec3 vCol; varying float vA;
${GLSL_PALETTE}
void main(){
  float speed = 0.16 + fract(aSeed * 7.13) * 0.16;
  float head = fract(uT * speed + aSeed * 3.71) * 1.35;
  float t = head - aIdx * 0.2;
  float on = step(0.0, t) * step(t, 1.0);
  t = clamp(t, 0.0, 1.0);
  float ang = acos(clamp(dot(uO, aB), -1.0, 1.0));
  float sa = max(sin(ang), 0.0001);
  vec3 p = (sin((1.0 - t) * ang) * uO + sin(t * ang) * aB) / sa;
  p *= 1.0 + (0.06 + 0.34 * (ang / 3.14159)) * sin(3.14159 * t);
  vec4 w = modelMatrix * vec4(p, 1.0);
  float face = smoothstep(-0.25, 0.2, dot(normalize(w.xyz - uC), normalize(cameraPosition - w.xyz)));
  vec4 mv = viewMatrix * w;
  gl_Position = projectionMatrix * mv;
  float k = 1.0 - aIdx;
  vCol = mix(pal(aSeed), vec3(1.0), k * k * 0.85);
  vA = on * uArcs * (0.12 + 0.88 * face) * pow(k, 1.5);
  gl_PointSize = uPx * (1.4 + 6.0 * k * k) * (9.0 / -mv.z);
}
`;

function unit(lat, lon) {
  const la = (lat * Math.PI) / 180, lo = (lon * Math.PI) / 180;
  return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)];
}

function glowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  const r = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  r.addColorStop(0, "rgba(255,255,255,1)");
  r.addColorStop(0.25, "rgba(255,255,255,.45)");
  r.addColorStop(0.6, "rgba(255,255,255,.08)");
  r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r;
  g.fillRect(0, 0, 256, 256);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

function start() {
  const canvas = document.getElementById("cosmos");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = matchMedia("(max-width: 760px), (pointer: coarse)").matches;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "high-performance" });
  } catch (e) {
    document.documentElement.classList.add("no-webgl");
    return;
  }
  const DPR = Math.min(window.devicePixelRatio || 1, mobile ? 1.75 : 1.6);
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(0x000000, 1);
  renderer.toneMapping = NoToneMapping;
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 500);
  camera.position.set(0, 0, 11);
  const pal = PALETTE.map((h) => new Color(h));

  /* ---------------- the morphing particles ---------------- */
  const N = mobile ? 17000 : 46000;
  const R = rng(20261105);
  const gauss = () => Math.sqrt(-2 * Math.log(R() + 1e-9)) * Math.cos(2 * Math.PI * R());
  const P0 = new Float32Array(N * 3), P1 = new Float32Array(N * 3), P2 = new Float32Array(N * 3),
    P3 = new Float32Array(N * 3), P4 = new Float32Array(N * 3), C0 = new Float32Array(N * 3), RR = new Float32Array(N * 4), KK = new Float32Array(N);
  const ARMS = 3, RMAX = 6.4, BARS = 34, STRANDS = 7;
  const inside = new Color("#FFE2B8"), mid = new Color("#FF4FA8"), outside = new Color("#4D6BFF"), tmp = new Color();
  const land = DATA.land, landN = land.length / 2;
  const landCount = Math.min(Math.floor(N * 0.66), landN * 4);
  for (let i = 0; i < N; i++) {
    const i3 = i * 3, i4 = i * 4;
    // 0: spiral galaxy with a bright core
    let x, y, z, r;
    if (R() < 0.13) {
      r = Math.abs(gauss()) * 0.55;
      const th = R() * Math.PI * 2, ph = Math.acos(2 * R() - 1);
      x = r * Math.sin(ph) * Math.cos(th); y = r * Math.cos(ph) * 0.6; z = r * Math.sin(ph) * Math.sin(th);
    } else {
      r = Math.pow(R(), 1.55) * RMAX + 0.2;
      const branch = ((i % ARMS) / ARMS) * Math.PI * 2, spin = r * 0.95;
      const rand = (p) => Math.pow(R(), 3) * (R() < 0.5 ? 1 : -1) * 0.42 * r * p;
      x = Math.cos(branch + spin) * r + rand(1); y = rand(0.35); z = Math.sin(branch + spin) * r + rand(1);
    }
    P0[i3] = x; P0[i3 + 1] = y; P0[i3 + 2] = z;
    const t = Math.min(1, r / RMAX);
    if (t < 0.45) tmp.copy(inside).lerp(mid, t / 0.45); else tmp.copy(mid).lerp(outside, (t - 0.45) / 0.55);
    tmp.lerp(pal[Math.floor(R() * 5)], 0.18);
    C0[i3] = tmp.r; C0[i3 + 1] = tmp.g; C0[i3 + 2] = tmp.b;

    // 1: noise, the explosion
    const len = Math.hypot(x, y, z) || 1;
    let dx = x / len + gauss() * 0.55, dy = y / len + gauss() * 0.55, dz = z / len + gauss() * 0.55;
    const dl = Math.hypot(dx, dy, dz) || 1;
    const dist = 2.2 + Math.pow(R(), 0.55) * 8.5;
    P1[i3] = (dx / dl) * dist * 1.25; P1[i3 + 1] = (dy / dl) * dist * 0.75; P1[i3 + 2] = (dz / dl) * dist - 1.5;

    // 2: sound wave, several strands
    const st = i % STRANDS;
    P2[i3] = (R() * 2 - 1) * 7.5; P2[i3 + 1] = st; P2[i3 + 2] = (st - 3) * 0.1 + gauss() * 0.06;

    // 3: spectrum bars
    const b = i % BARS;
    P3[i3] = -7.2 + ((b + 0.5) * 14.4) / BARS + (R() - 0.5) * 0.11; P3[i3 + 1] = b / (BARS - 1); P3[i3 + 2] = gauss() * 0.07;

    // 4: the globe: land dots, then a faint ocean and halo
    let u, kind;
    if (i < landCount) {
      const j = i % landN, copy = Math.floor(i / landN);
      const lat = land[j * 2] + (copy ? (R() - 0.5) * 1.1 : 0), lon = land[j * 2 + 1] + (copy ? (R() - 0.5) * 1.1 : 0);
      u = unit(lat, lon); kind = 0;
    } else {
      const th = R() * Math.PI * 2, ph = Math.acos(2 * R() - 1);
      const s = R() < 0.35 ? 1.035 + R() * 0.05 : 1.0;
      u = [Math.sin(ph) * Math.cos(th) * s, Math.cos(ph) * s, Math.sin(ph) * Math.sin(th) * s]; kind = 1;
    }
    P4[i3] = u[0]; P4[i3 + 1] = u[1]; P4[i3 + 2] = u[2];

    RR[i4] = R(); RR[i4 + 1] = R(); RR[i4 + 2] = R(); RR[i4 + 3] = R();
    KK[i] = kind;
  }
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(P0, 3));
  geo.setAttribute("aP1", new BufferAttribute(P1, 3));
  geo.setAttribute("aP2", new BufferAttribute(P2, 3));
  geo.setAttribute("aP3", new BufferAttribute(P3, 3));
  geo.setAttribute("aP4", new BufferAttribute(P4, 3));
  geo.setAttribute("aC0", new BufferAttribute(C0, 3));
  geo.setAttribute("aR", new BufferAttribute(RR, 4));
  geo.setAttribute("aK", new BufferAttribute(KK, 1));
  const U = {
    uP: { value: 0 }, uT: { value: 0 }, uIntro: { value: reduced ? 1 : 0 }, uPx: { value: DPR }, uScale: { value: 30 },
    uTilt: { value: 0.62 }, uGRot: { value: 0 }, uGTilt: { value: 0.42 }, uGR: { value: 2.7 }, uGOff: { value: new Vector3() },
    uFlash: { value: 0 }, uPal: { value: pal }, uBoost: { value: mobile ? 1.6 : 1 }
  };
  const mat = new ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: false, blending: AdditiveBlending });
  const points = new Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);

  /* ---------------- far stars ---------------- */
  const SN = mobile ? 2200 : 5200;
  const sp = new Float32Array(SN * 3), sr = new Float32Array(SN * 4), sc = new Float32Array(SN * 3);
  const starCols = [new Color("#FFFFFF"), new Color("#CFE0FF"), new Color("#FFE7C9"), new Color("#BFC8FF")];
  for (let i = 0; i < SN; i++) {
    const th = R() * Math.PI * 2, ph = Math.acos(2 * R() - 1), rad = 40 + R() * 70;
    sp[i * 3] = rad * Math.sin(ph) * Math.cos(th); sp[i * 3 + 1] = rad * Math.cos(ph); sp[i * 3 + 2] = rad * Math.sin(ph) * Math.sin(th);
    sr[i * 4] = Math.pow(R(), 3); sr[i * 4 + 1] = R(); sr[i * 4 + 2] = R(); sr[i * 4 + 3] = R();
    const c = starCols[Math.floor(R() * starCols.length)];
    sc[i * 3] = c.r; sc[i * 3 + 1] = c.g; sc[i * 3 + 2] = c.b;
  }
  const sgeo = new BufferGeometry();
  sgeo.setAttribute("position", new BufferAttribute(sp, 3));
  sgeo.setAttribute("aR", new BufferAttribute(sr, 4));
  sgeo.setAttribute("aC", new BufferAttribute(sc, 3));
  const SU = { uT: { value: 0 }, uPx: { value: DPR } };
  const stars = new Points(sgeo, new ShaderMaterial({
    uniforms: SU, vertexShader: STAR_VERT, transparent: true, depthWrite: false, blending: AdditiveBlending,
    fragmentShader: "varying float vA; varying vec3 vCol;\nvoid main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(c)); gl_FragColor = vec4(vCol, a * a * vA);\n#include <colorspace_fragment>\n}"
  }));
  stars.frustumCulled = false;
  scene.add(stars);

  /* ---------------- nebulae ---------------- */
  const tex = glowTexture();
  const nebulae = [];
  [["#3D2BFF", -4.5, -1.6, -12, 15, 0.09], ["#C2187A", 4.5, -2.4, -13, 16, 0.07], ["#1E5BFF", 0.5, -4.5, -16, 20, 0.06], ["#FF6A2B", 2.5, -0.5, -14, 10, 0.03]].forEach((n) => {
    const m = new SpriteMaterial({ map: tex, color: new Color(n[0]), transparent: true, opacity: n[5], blending: AdditiveBlending, depthWrite: false });
    const s = new Sprite(m);
    s.position.set(n[1], n[2], n[3]);
    s.scale.set(n[4], n[4], 1);
    s.userData.base = n[5];
    scene.add(s);
    nebulae.push(s);
  });

  /* ---------------- the globe group: arcs and city dots ---------------- */
  const globe = new Group();
  const origin = unit(DATA.origin[0], DATA.origin[1]);
  const cities = DATA.cities;
  const SEG = 72;
  const ap = [], at = [], aa = [];
  cities.forEach((c, ci) => {
    const v = unit(c[1], c[2]);
    const dot = Math.max(-1, Math.min(1, origin[0] * v[0] + origin[1] * v[1] + origin[2] * v[2]));
    const ang = Math.acos(dot) || 0.0001;
    const lift = 0.06 + 0.34 * (ang / Math.PI);
    let prev = null;
    for (let s = 0; s <= SEG; s++) {
      const t = s / SEG;
      const a = Math.sin((1 - t) * ang) / Math.sin(ang), b = Math.sin(t * ang) / Math.sin(ang);
      const h = 1 + lift * Math.sin(Math.PI * t);
      const p = [(a * origin[0] + b * v[0]) * h, (a * origin[1] + b * v[1]) * h, (a * origin[2] + b * v[2]) * h];
      if (prev) { ap.push(...prev.p, ...p); at.push(prev.t, t); aa.push(ci / cities.length, ci / cities.length); }
      prev = { p, t };
    }
  });
  const ageo = new BufferGeometry();
  ageo.setAttribute("position", new BufferAttribute(new Float32Array(ap), 3));
  ageo.setAttribute("aT", new BufferAttribute(new Float32Array(at), 1));
  ageo.setAttribute("aArc", new BufferAttribute(new Float32Array(aa), 1));
  const AU = { uT: { value: 0 }, uArcs: { value: 0 }, uPal: { value: pal }, uC: { value: new Vector3() } };
  const arcs = new LineSegments(ageo, new ShaderMaterial({ uniforms: AU, vertexShader: ARC_VERT, fragmentShader: ARC_FRAG, transparent: true, depthWrite: false, depthTest: false, blending: AdditiveBlending }));
  arcs.frustumCulled = false;
  globe.add(arcs);
  const dp = [origin[0] * 1.004, origin[1] * 1.004, origin[2] * 1.004], di = [-1];
  cities.forEach((c, ci) => { const v = unit(c[1], c[2]); dp.push(v[0] * 1.004, v[1] * 1.004, v[2] * 1.004); di.push(ci / cities.length); });
  const dgeo = new BufferGeometry();
  dgeo.setAttribute("position", new BufferAttribute(new Float32Array(dp), 3));
  dgeo.setAttribute("aI", new BufferAttribute(new Float32Array(di), 1));
  const DU = { uT: { value: 0 }, uPx: { value: DPR }, uArcs: { value: 0 }, uPal: { value: pal }, uC: AU.uC };
  const dots = new Points(dgeo, new ShaderMaterial({
    uniforms: DU, vertexShader: DOT_VERT, transparent: true, depthWrite: false, depthTest: false, blending: AdditiveBlending,
    fragmentShader: "varying vec3 vCol; varying float vA;\nvoid main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); float a = smoothstep(0.5, 0.0, d); float ring = smoothstep(0.5, 0.42, d) * smoothstep(0.3, 0.38, d); gl_FragColor = vec4(vCol, (a * a + ring * 0.6) * vA);\n#include <colorspace_fragment>\n}"
  }));
  dots.frustumCulled = false;
  globe.add(dots);
  // comets: glowing packets that leave Milan and land on every client country
  const TRAIL = mobile ? 14 : 26;
  const cN = cities.length * TRAIL;
  const cb = new Float32Array(cN * 3), cs = new Float32Array(cN), cx = new Float32Array(cN);
  cities.forEach((c, ci) => {
    const v = unit(c[1], c[2]);
    for (let j = 0; j < TRAIL; j++) {
      const q = ci * TRAIL + j;
      cb[q * 3] = v[0]; cb[q * 3 + 1] = v[1]; cb[q * 3 + 2] = v[2];
      cs[q] = ci / cities.length; cx[q] = j / (TRAIL - 1);
    }
  });
  const cgeo = new BufferGeometry();
  cgeo.setAttribute("position", new BufferAttribute(new Float32Array(cN * 3), 3));
  cgeo.setAttribute("aB", new BufferAttribute(cb, 3));
  cgeo.setAttribute("aSeed", new BufferAttribute(cs, 1));
  cgeo.setAttribute("aIdx", new BufferAttribute(cx, 1));
  const CU = { uT: { value: 0 }, uPx: { value: DPR }, uArcs: { value: 0 }, uPal: { value: pal }, uC: AU.uC, uO: { value: new Vector3(origin[0], origin[1], origin[2]) } };
  const comets = new Points(cgeo, new ShaderMaterial({
    uniforms: CU, vertexShader: COMET_VERT, transparent: true, depthWrite: false, depthTest: false, blending: AdditiveBlending,
    fragmentShader: "varying vec3 vCol; varying float vA;\nvoid main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(c)); gl_FragColor = vec4(vCol, a * a * vA);\n#include <colorspace_fragment>\n}"
  }));
  comets.frustumCulled = false;
  globe.add(comets);
  // atmosphere: a soft halo that makes the dotted sphere read as a planet
  const atmo = new Sprite(new SpriteMaterial({ map: tex, color: new Color("#4A6BFF"), transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false, depthTest: false }));
  atmo.scale.set(3.5, 3.5, 1);
  globe.add(atmo);
  globe.rotation.order = "XYZ";
  scene.add(globe);

  /* ---------------- country labels that follow the globe ---------------- */
  const layer = document.getElementById("globe-labels");
  const SLOTS = mobile ? 3 : 6;
  const slots = [];
  let names = cities.map((c) => c[0]);
  try { const dn = new Intl.DisplayNames([document.documentElement.lang || "en"], { type: "region" }); names = cities.map((c) => dn.of(c[0]) || c[0]); } catch (e) {}
  const cityVec = cities.map((c) => { const v = unit(c[1], c[2]); return new Vector3(v[0], v[1], v[2]); });
  const originVec = new Vector3(origin[0], origin[1], origin[2]);
  let homeLabel = null;
  if (layer) {
    for (let i = 0; i < SLOTS; i++) {
      const el = document.createElement("span"); el.className = "globe-label"; el.innerHTML = "<i></i><b></b>";
      layer.appendChild(el); slots.push({ el, city: -1, born: 0, a: 0, x: 0, y: 0 });
    }
    homeLabel = document.createElement("span"); homeLabel.className = "globe-label globe-label--home"; homeLabel.innerHTML = "<i></i><b>" + (layer.getAttribute("data-home") || "Milano") + "</b>";
    layer.appendChild(homeLabel);
  }
  const tmpV = new Vector3(), tmpC = new Vector3(), tmpN = new Vector3();
  function place(v, out) {
    tmpV.copy(v).multiplyScalar(1.02).applyMatrix4(globe.matrixWorld);
    tmpC.setFromMatrixPosition(globe.matrixWorld);
    tmpN.copy(tmpV).sub(tmpC).normalize();
    out.face = tmpN.dot(tmpC.copy(camera.position).sub(tmpV).normalize());
    tmpV.project(camera);
    out.x = (tmpV.x * 0.5 + 0.5) * W; out.y = (-tmpV.y * 0.5 + 0.5) * H;
    return out;
  }
  const probe = { x: 0, y: 0, face: 0 };
  let nextSwap = 0;
  function labels(on, dt) {
    if (!layer) return;
    layer.style.opacity = on > 0.02 ? "1" : "0";
    if (on <= 0.02) { slots.forEach((s) => { s.a = 0; s.el.style.opacity = "0"; }); if (homeLabel) homeLabel.style.opacity = "0"; return; }
    globe.updateMatrixWorld(true);
    // one slot at a time picks a new country that faces the viewer and is clear of the other labels
    if (time > nextSwap) {
      nextSwap = time + 0.55;
      let slot = slots.find((s) => s.city < 0) || slots.reduce((a, b) => (a.born < b.born ? a : b));
      if (slot.city < 0 || time - slot.born > 3.4) {
        for (let tries = 0; tries < 24; tries++) {
          const ci = Math.floor(Math.random() * cities.length);
          if (slots.some((s) => s.city === ci)) continue;
          place(cityVec[ci], probe);
          if (probe.face < 0.42 || probe.x < 60 || probe.x > W - (W > 900 ? 60 : 150) || probe.y < 90 || probe.y > (W > 900 ? H - 60 : H * 0.4)) continue;
          if (slots.some((s) => s.city >= 0 && s !== slot && Math.hypot(s.x - probe.x, s.y - probe.y) < 130)) continue;
          slot.city = ci; slot.born = time; slot.a = 0; slot.el.lastChild.textContent = names[ci];
          break;
        }
      }
    }
    slots.forEach((s) => {
      if (s.city < 0) return;
      place(cityVec[s.city], probe);
      s.x = probe.x; s.y = probe.y;
      const age = time - s.born;
      const want = probe.face > 0.2 && age < 3.6 ? 1 : 0;
      s.a += (want - s.a) * Math.min(1, dt * 7);
      if (!want && s.a < 0.02) s.city = -1;
      s.el.style.opacity = (s.a * on).toFixed(3);
      s.el.style.transform = "translate3d(" + s.x.toFixed(1) + "px," + s.y.toFixed(1) + "px,0)";
    });
    if (homeLabel) {
      place(originVec, probe);
      homeLabel.style.opacity = (Math.max(0, Math.min(1, (probe.face - 0.15) * 3)) * on).toFixed(3);
      homeLabel.style.transform = "translate3d(" + probe.x.toFixed(1) + "px," + probe.y.toFixed(1) + "px,0)";
    }
  }

  /* ---------------- bloom ---------------- */
  let composer = null, bloom = null;
  if (!mobile) {
    composer = new EffectComposer(renderer);
    composer.setPixelRatio(Math.min(DPR, 1.5));
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new Vector2(512, 512), 0.62, 0.5, 0.22);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }

  /* ---------------- sizing ---------------- */
  let W = 0, H = 0, baseZ = 11;
  function resize() {
    // the canvas box, not the window: on phones it is 100lvh tall and does not change when the address bar hides
    const w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    if (w === W && h === H) return;
    W = w; H = h;
    renderer.setSize(W, H, false);
    if (composer) composer.setSize(W, H);
    camera.aspect = W / H;
    baseZ = camera.aspect < 1 ? Math.min(20, 12.5 / Math.pow(camera.aspect, 0.55)) : 12.5;
    camera.updateProjectionMatrix();
    U.uScale.value = 30 * (baseZ / 12.5) * (H / 900) * (mobile ? 1.15 : 1);
  }
  resize();
  let rt = 0;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 120); });

  /* ---------------- pointer parallax ---------------- */
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener("pointermove", (e) => { mouse.tx = e.clientX / W - 0.5; mouse.ty = e.clientY / H - 0.5; }, { passive: true });

  /* ---------------- drag to spin the globe ---------------- */
  const drag = { on: false, x: 0, rot: 0, vel: 0 };
  const zone = document.getElementById("worldwide");
  if (zone) {
    zone.addEventListener("pointerdown", (e) => {
      if (e.target.closest("a, button")) return;
      drag.on = true; drag.x = e.clientX; drag.vel = 0; zone.classList.add("is-grabbing");
    });
    window.addEventListener("pointermove", (e) => {
      if (!drag.on) return;
      const dx = e.clientX - drag.x; drag.x = e.clientX;
      drag.rot += dx * 0.0052; drag.vel = dx * 0.0052;
    }, { passive: true });
    const stop = () => { if (drag.on) { drag.on = false; zone.classList.remove("is-grabbing"); } };
    window.addEventListener("pointerup", stop); window.addEventListener("pointercancel", stop);
  }

  /* ---------------- loop ---------------- */
  const cur = { p: S.p, shift: S.shift, arcs: 0, dim: 0 };
  let last = performance.now(), time = 0, introT = reduced ? 10 : 0, running = true, raf = 0;
  const ease = (x) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x));
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (!S.active || document.hidden) return;
    time += reduced ? 0 : dt;
    introT += dt;
    const k = 1 - Math.exp(-dt * 9);
    cur.p += (S.p - cur.p) * k;
    cur.shift += (S.shift - cur.shift) * k;
    cur.arcs += (S.arcs - cur.arcs) * k;
    cur.dim += ((S.dim || 0) - cur.dim) * k;
    mouse.x += (mouse.tx - mouse.x) * k * 0.6; mouse.y += (mouse.ty - mouse.y) * k * 0.6;

    U.uT.value = time; SU.uT.value = time; AU.uT.value = time; DU.uT.value = time; CU.uT.value = time;
    if (!drag.on) { drag.rot += drag.vel; drag.vel *= Math.pow(0.94, dt * 60); }
    U.uP.value = cur.p;
    U.uIntro.value = reduced ? 1 : ease(Math.min(1, introT / 2.6));
    U.uFlash.value = Math.exp(-Math.pow((cur.p - 0.55) * 5.0, 2.0)) * 1.2;

    // globe: Europe faces the viewer, then a slow turn
    const gr = -0.16 - time * 0.07 + mouse.x * 0.5 + drag.rot;
    const desk = W > 900;
    U.uGRot.value = gr;
    U.uGTilt.value = 0.42 + mouse.y * 0.2;
    const gx = desk ? cur.shift * 2.6 : 0, gy = desk ? 0 : cur.shift * 4.45;
    U.uGOff.value.set(gx, gy, 0);
    U.uGR.value = desk ? 2.7 : 2.25 - cur.shift * 0.3;
    globe.rotation.set(U.uGTilt.value, gr, 0);
    globe.position.set(gx, gy, 0);
    AU.uC.value.set(gx, gy, 0);
    globe.scale.setScalar(U.uGR.value);
    const arcsOn = cur.arcs * Math.max(0, Math.min(1, (cur.p - 3.55) / 0.4));
    AU.uArcs.value = arcsOn; DU.uArcs.value = arcsOn; CU.uArcs.value = arcsOn;
    atmo.material.opacity = 0.3 * Math.max(0, Math.min(1, (cur.p - 3.2) / 0.8)) * (1 - cur.dim * 0.6);
    // names only once the globe has settled in its place, never over the story lines
    labels(arcsOn * Math.max(0, Math.min(1, (cur.arcs - 0.55) / 0.35)), dt);

    // camera drift
    camera.position.x = mouse.x * 0.9;
    camera.position.y = -mouse.y * 0.6;
    camera.position.z = baseZ - Math.min(1, Math.max(0, cur.p - 3)) * 1.2;
    camera.lookAt(0, 2.25 * Math.max(0, 1 - Math.min(1, cur.p * 1.25)), 0);
    stars.rotation.y = time * 0.006 + cur.p * 0.12;
    stars.rotation.x = cur.p * 0.05;
    nebulae.forEach((n, i) => {
      n.material.opacity = n.userData.base * (1 - cur.dim * 0.8) * (0.8 + 0.2 * Math.sin(time * 0.3 + i));
      n.material.rotation = time * 0.01 * (i % 2 ? 1 : -1);
    });
    canvas.style.opacity = String(1 - cur.dim * 0.65);

    if (composer) composer.render(); else renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(frame);
  document.documentElement.classList.add("has-cosmos");
  window.APCosmos = { renderer, scene, camera, state: S, jump: () => { cur.p = S.p; cur.shift = S.shift; cur.arcs = S.arcs; introT = 10; } };
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
else start();
