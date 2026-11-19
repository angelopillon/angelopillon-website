/* angelopillon.com — the client globe on the home (November 2026).
   A dotted Earth that turns slowly inside its own section: arcs leave Milan for the 66 client
   countries and a light runs along each one. It never takes over the page scroll: drag sideways
   to turn it, scroll the page as usual. Paused when off screen, still for reduced motion. */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, BufferGeometry, BufferAttribute, Points, LineSegments,
  ShaderMaterial, AdditiveBlending, Vector3
} from "three";
import DATA from "./globe-data.json";

/* colours go to the shaders exactly as written (sRGB), with no colour management in between */
const rgb = (hex) => new Vector3(parseInt(hex.slice(1, 3), 16) / 255, parseInt(hex.slice(3, 5), 16) / 255, parseInt(hex.slice(5, 7), 16) / 255);
const GOLD = rgb("#D4B26A"), GOLD_HI = rgb("#F6E3B0"), INK = rgb("#F5F5F7");

function unit(lat, lon) {
  const la = (lat * Math.PI) / 180, lo = (lon * Math.PI) / 180;
  return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)];
}

const FACE = /* glsl */ `float facing(vec3 w){ return dot(normalize(w), normalize(cameraPosition - w)); }`;
const MARGIN = 1.45; /* half the frame, in globe radii: room for the highest arcs (the CSS glow behind it uses the same ratio) */

function start(host) {
  const canvas = host.querySelector("canvas");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  } catch (e) { host.classList.add("is-static"); return; }
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 50);
  const globe = new Group();
  scene.add(globe);
  const T0 = 2.4; /* start a little into the loop, so some lights are already on their way */
  const U = { uT: { value: T0 }, uPx: { value: DPR } };

  /* land: a dotted sphere, the far side kept faint so it reads as a planet */
  const land = DATA.land, n = land.length / 2, lp = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const v = unit(land[i * 2], land[i * 2 + 1]); lp.set(v, i * 3); }
  const lg = new BufferGeometry(); lg.setAttribute("position", new BufferAttribute(lp, 3));
  const landPts = new Points(lg, new ShaderMaterial({
    uniforms: U, transparent: true, depthWrite: false,
    vertexShader: `uniform float uPx; varying float vF; ${FACE}
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vF = facing(w.xyz); vec4 mv = viewMatrix * w; gl_Position = projectionMatrix * mv; gl_PointSize = uPx * 2.1 * (4.6 / -mv.z); }`,
    fragmentShader: `varying float vF;
      void main(){ vec2 c = gl_PointCoord - 0.5; float a = 1.0 - smoothstep(0.12, 0.5, length(c)); float f = smoothstep(-0.1, 0.45, vF);
        gl_FragColor = vec4(mix(vec3(0.34, 0.34, 0.37), vec3(0.78, 0.78, 0.81), f), a * (0.10 + 0.80 * f)); }`
  }));
  landPts.frustumCulled = false;
  globe.add(landPts);

  /* arcs from Milan, with a light that runs along each one */
  const origin = unit(DATA.origin[0], DATA.origin[1]), cities = DATA.cities, SEG = 56;
  const ap = [], at = [], aa = [];
  cities.forEach((c, ci) => {
    const v = unit(c[1], c[2]);
    const dot = Math.max(-1, Math.min(1, origin[0] * v[0] + origin[1] * v[1] + origin[2] * v[2]));
    const ang = Math.acos(dot);
    if (ang < 0.02) return;
    const lift = 0.04 + 0.32 * (ang / Math.PI);
    let prev = null;
    for (let s = 0; s <= SEG; s++) {
      const t = s / SEG, a = Math.sin((1 - t) * ang) / Math.sin(ang), b = Math.sin(t * ang) / Math.sin(ang), h = 1.003 + lift * Math.sin(Math.PI * t);
      const p = [(a * origin[0] + b * v[0]) * h, (a * origin[1] + b * v[1]) * h, (a * origin[2] + b * v[2]) * h];
      if (prev) { ap.push(...prev.p, ...p); at.push(prev.t, t); aa.push(ci / cities.length, ci / cities.length); }
      prev = { p, t };
    }
  });
  const ag = new BufferGeometry();
  ag.setAttribute("position", new BufferAttribute(new Float32Array(ap), 3));
  ag.setAttribute("aT", new BufferAttribute(new Float32Array(at), 1));
  ag.setAttribute("aArc", new BufferAttribute(new Float32Array(aa), 1));
  const arcs = new LineSegments(ag, new ShaderMaterial({
    uniforms: { uT: U.uT, uGold: { value: GOLD }, uHi: { value: GOLD_HI } }, transparent: true, premultipliedAlpha: true, depthWrite: false, blending: AdditiveBlending,
    vertexShader: `attribute float aT; attribute float aArc; varying float vT; varying float vArc; varying float vF; ${FACE}
      void main(){ vT = aT; vArc = aArc; vec4 w = modelMatrix * vec4(position, 1.0); vF = facing(w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform float uT; uniform vec3 uGold, uHi; varying float vT; varying float vArc; varying float vF;
      void main(){
        float speed = 0.11 + fract(vArc * 7.13) * 0.08;
        float head = fract(uT * speed + vArc * 3.71) * 1.5 - 0.1;
        float d = head - vT, tail = 0.3;
        float g = (d >= 0.0 && d < tail) ? pow(1.0 - d / tail, 1.6) : 0.0;
        float f = smoothstep(-0.35, 0.2, vF);
        float a = (0.26 + 0.74 * g) * (0.12 + 0.88 * f);
        gl_FragColor = vec4(mix(uGold, uHi, g) * a, a);
      }`
  }));
  arcs.frustumCulled = false;
  globe.add(arcs);

  /* client cities in white, Milan in gold */
  const dp = origin.map((x) => x * 1.006), di = [1];
  cities.forEach((c) => { const v = unit(c[1], c[2]); dp.push(v[0] * 1.006, v[1] * 1.006, v[2] * 1.006); di.push(0); });
  const dg = new BufferGeometry();
  dg.setAttribute("position", new BufferAttribute(new Float32Array(dp), 3));
  dg.setAttribute("aHome", new BufferAttribute(new Float32Array(di), 1));
  const dots = new Points(dg, new ShaderMaterial({
    uniforms: { uPx: U.uPx, uGold: { value: GOLD }, uInk: { value: INK } }, transparent: true, depthWrite: false,
    vertexShader: `attribute float aHome; uniform float uPx; varying float vF; varying float vH; ${FACE}
      void main(){ vH = aHome; vec4 w = modelMatrix * vec4(position, 1.0); vF = facing(w.xyz); vec4 mv = viewMatrix * w; gl_Position = projectionMatrix * mv;
        gl_PointSize = uPx * (aHome > 0.5 ? 13.0 : 4.6) * (4.6 / -mv.z); }`,
    fragmentShader: `uniform vec3 uGold, uInk; varying float vF; varying float vH;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c);
        float ring = (1.0 - smoothstep(0.40, 0.5, d)) * smoothstep(0.26, 0.34, d);
        float core = 1.0 - smoothstep(0.10, 0.2, d);
        float a = vH > 0.5 ? ring * 0.9 + core : 1.0 - smoothstep(0.2, 0.5, d);
        float f = smoothstep(-0.05, 0.3, vF);
        gl_FragColor = vec4(vH > 0.5 ? uGold : uInk, a * f); }`
  }));
  dots.frustumCulled = false;
  globe.add(dots);

  /* start with Europe facing the viewer, the north tipped slightly towards us */
  const lat0 = (DATA.origin[0] * Math.PI) / 180, lon0 = (DATA.origin[1] * Math.PI) / 180;
  let rotY = -lon0 + 0.35, velY = 0, dragging = false, lastX = 0, lastT = 0;
  globe.rotation.order = "XYZ";
  globe.rotation.x = lat0 * 0.62;

  /* size: the globe fills the box, dots scale with it */
  let running = false, raf = 0, prevT = 0;
  const t0 = performance.now();
  const render = () => { globe.rotation.y = rotY; renderer.render(scene, camera); };
  const size = () => {
    const r = host.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const fit = Math.tan((camera.fov * Math.PI) / 360);
    camera.position.set(0, 0, MARGIN / (fit * Math.min(1, camera.aspect)));
    camera.updateProjectionMatrix();
    U.uPx.value = DPR * Math.max(0.6, Math.min(1.3, Math.min(w, h) / 640));
    render();
  };

  /* drag sideways to turn; vertical swipes stay with the page (touch-action: pan-y in the CSS) */
  canvas.addEventListener("pointerdown", (e) => {
    dragging = true; lastX = e.clientX; lastT = performance.now(); velY = 0;
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    host.classList.add("is-dragging");
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const now = performance.now(), dx = e.clientX - lastX;
    rotY += dx * 0.006;
    velY = ((dx * 0.006) / Math.max(1, now - lastT)) * 16;
    lastX = e.clientX; lastT = now;
    if (!running) render();
  });
  const end = () => { dragging = false; host.classList.remove("is-dragging"); };
  canvas.addEventListener("pointerup", end);
  canvas.addEventListener("pointercancel", end);

  /* loop only while visible */
  function loop(now) {
    const dt = Math.min(0.05, (now - (prevT || now)) / 1000); prevT = now;
    U.uT.value = T0 + (now - t0) / 1000;
    if (!dragging) { rotY += velY + dt * 0.07; velY *= 0.94; }
    render();
    raf = requestAnimationFrame(loop);
  }
  const play = () => { if (running || reduced) return; running = true; prevT = 0; raf = requestAnimationFrame(loop); };
  const stop = () => { running = false; cancelAnimationFrame(raf); };
  let visible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; if (visible && !document.hidden) play(); else stop(); }), { rootMargin: "120px 0px" }).observe(host);
  } else play();
  document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); else if (visible) play(); });
  if (window.ResizeObserver) new ResizeObserver(() => size()).observe(host); else window.addEventListener("resize", size);
  size();
  host.classList.add("is-live");
}

const host = document.querySelector("[data-globe]");
if (host && !host.classList.contains("is-live")) {
  try { start(host); } catch (e) { host.classList.add("is-static"); }
}
