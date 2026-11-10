/* angelopillon.com — motion layer: smooth scroll, reveals, counters, the scroll story that drives the cosmos,
   the analog chain, magnetic buttons, card spotlights and the country ticker. */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);
const d = document, root = d.documentElement;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(pointer: fine)").matches;
const $ = (s, c) => (c || d).querySelector(s);
const $$ = (s, c) => Array.from((c || d).querySelectorAll(s));
const S = (window.__cosmos = window.__cosmos || { p: 0, shift: 0, arcs: 0, active: true, dim: 0 });

root.classList.add("js-motion");
if (reduced) root.classList.add("reduced");

/* ---------------- a new page always starts at the top (back/forward and reload keep their position) ---------------- */
try {
  const nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  if (!location.hash && (!nav || nav.type === "navigate")) window.scrollTo(0, 0);
} catch (e) {}

/* ---------------- smooth scroll: responsive, short glide ---------------- */
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.16, wheelMultiplier: 1.15, smoothWheel: true, anchors: { offset: -72 }, autoRaf: false });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
window.APLenis = lenis;

/* ---------------- header: solid after the hero, hides while scrolling down ---------------- */
const header = $(".site-header");
if (header) {
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-solid", y > 40);
    if (!d.body.classList.contains("menu-open")) header.classList.toggle("is-hidden", y > 320 && y > lastY + 2);
    if (y < lastY - 2) header.classList.remove("is-hidden");
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------- split text ---------------- */
function split(el) {
  if (el.dataset.splitDone) return $$(".w > span", el);
  const walk = (node) => {
    Array.from(node.childNodes).forEach((n) => {
      if (n.nodeType === 3) {
        const parts = n.textContent.split(/(\s+)/);
        const frag = d.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(d.createTextNode(p)); return; }
          const w = d.createElement("span"); w.className = "w";
          const i = d.createElement("span"); i.textContent = p;
          w.appendChild(i); frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && !n.classList.contains("w")) walk(n);
    });
  };
  walk(el);
  el.dataset.splitDone = "1";
  return $$(".w > span", el);
}

/* ---------------- hero entrance, after the big bang ---------------- */
const hero = $(".hero");
if (hero) {
  const words = split($(".hero__line", hero));
  const tl = gsap.timeline({ delay: reduced ? 0 : 0.85 });
  if (!reduced) {
    tl.from("[data-hero-k]", { y: 18, opacity: 0, duration: 0.9, ease: "power3.out" })
      .from(words, { yPercent: 115, rotate: 4, duration: 1.25, ease: "expo.out", stagger: 0.07 }, "-=0.55")
      .from("[data-hero-l]", { y: 24, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.85")
      .from("[data-hero-c] > *", { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 }, "-=0.75")
      .from("[data-hero-p] > *", { y: 16, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.06 }, "-=0.6")
      .from(".hero__scroll", { opacity: 0, duration: 1 }, "-=0.4");
  }
}

/* ---------------- generic reveals ---------------- */
if (!reduced) {
  $$("[data-split]").forEach((el) => {
    if (el.closest(".hero")) return;
    const w = split(el);
    gsap.from(w, { yPercent: 112, duration: 1.1, ease: "expo.out", stagger: 0.045, scrollTrigger: { trigger: el, start: "top 86%" } });
  });
  $$("[data-reveal]").forEach((el) => {
    const kids = el.hasAttribute("data-reveal-kids") ? Array.from(el.children) : [el];
    gsap.from(kids, { y: 46, opacity: 0, duration: 1.05, ease: "power3.out", stagger: 0.09, scrollTrigger: { trigger: el, start: "top 88%" } });
  });
  $$("[data-parallax]").forEach((el) => {
    const amt = parseFloat(el.getAttribute("data-parallax")) || 12;
    gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
  });
  $$("[data-zoom]").forEach((el) => {
    gsap.fromTo(el, { scale: 1.12 }, { scale: 1, ease: "none", scrollTrigger: { trigger: el.closest("figure") || el, start: "top bottom", end: "bottom 35%", scrub: true } });
  });
  $$("[data-clip]").forEach((el) => {
    gsap.fromTo(el, { clipPath: "inset(12% 12% 12% 12% round 40px)" }, { clipPath: "inset(0% 0% 0% 0% round 28px)", ease: "none", scrollTrigger: { trigger: el, start: "top 95%", end: "top 35%", scrub: true } });
  });
}

/* ---------------- counters ---------------- */
$$("[data-count]").forEach((el) => {
  const to = parseFloat(el.getAttribute("data-count")), dec = parseInt(el.getAttribute("data-dec") || "0", 10);
  const loc = root.lang || "en";
  const fmt = (v) => v.toLocaleString(loc, { minimumFractionDigits: dec, maximumFractionDigits: dec });
  if (reduced) { el.textContent = fmt(to); return; }
  const o = { v: 0 };
  el.textContent = fmt(0);
  gsap.to(o, { v: to, duration: 2.2, ease: "power2.out", onUpdate: () => (el.textContent = fmt(o.v)), scrollTrigger: { trigger: el, start: "top 90%" } });
});

/* ---------------- the scroll story that drives the cosmos ---------------- */
const story = $("#story");
if (story) {
  const lines = $$(".story__line", story), bar = $(".story__bar i", story), n = lines.length;
  const setLines = (q) => {
    lines.forEach((l, i) => {
      const c = n > 1 ? i / (n - 1) : 0;
      const o = Math.max(0, Math.min(1, 1.35 - Math.abs(q - c) * (n - 1) * 2.1));
      l.style.opacity = o.toFixed(3);
      l.style.transform = `translate3d(0, ${((q - c) * -90).toFixed(1)}px, 0) scale(${(0.94 + o * 0.06).toFixed(3)})`;
      l.style.filter = `blur(${((1 - o) * 10).toFixed(1)}px)`;
    });
    if (bar) bar.style.transform = `scaleX(${q.toFixed(4)})`;
  };
  setLines(0);
  if (reduced) {
    story.classList.add("is-static");
  } else {
    ScrollTrigger.create({ trigger: story, start: "top bottom", end: "top top", scrub: true, onUpdate: (st) => { S.p = st.progress; } });
    ScrollTrigger.create({ trigger: story, start: "top top", end: "bottom bottom", scrub: true, onUpdate: (st) => { S.p = 1 + st.progress * 3; setLines(st.progress); } });
  }
}
const world = $("#worldwide");
if (world) {
  ScrollTrigger.create({
    trigger: world, start: "top bottom", end: "top 25%", scrub: true,
    onUpdate: (st) => { S.shift = st.progress; S.arcs = st.progress; if (reduced) S.p = 4; },
    onLeaveBack: () => { S.shift = 0; S.arcs = 0; }
  });
}
// pause the WebGL loop when the universe is covered by the rest of the page
const zones = [$(".hero"), story, world].filter(Boolean);
if (zones.length && "IntersectionObserver" in window) {
  const vis = new Map();
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => vis.set(e.target, e.isIntersecting));
    S.active = Array.from(vis.values()).some(Boolean);
    root.classList.toggle("cosmos-off", !S.active);
  }, { rootMargin: "10% 0px 10% 0px" });
  zones.forEach((z) => io.observe(z));
}

/* ---------------- country ticker under the globe ---------------- */
const ticker = $("[data-ticker]");
if (ticker) {
  const codes = (ticker.getAttribute("data-codes") || "").split(",").filter(Boolean);
  let names = codes;
  try { const dn = new Intl.DisplayNames([root.lang || "en"], { type: "region" }); names = codes.map((c) => dn.of(c)); } catch (e) {}
  const order = names.map((_, i) => i).sort(() => Math.random() - 0.5);
  let k = 0;
  const next = () => {
    const name = names[order[k++ % order.length]];
    if (reduced) { ticker.textContent = name; return; }
    gsap.to(ticker, { yPercent: -60, opacity: 0, duration: 0.28, ease: "power2.in", onComplete: () => {
      ticker.textContent = name;
      gsap.fromTo(ticker, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45, ease: "power3.out" });
    } });
  };
  next();
  setInterval(() => { if (!d.hidden) next(); }, 1700);
}

/* ---------------- the analog chain: knobs turn as each unit passes ---------------- */
const chain = $(".chain");
if (chain && !reduced) {
  $$(".unit", chain).forEach((u) => {
    const knobs = $$(".knob", u);
    if (!knobs.length) return;
    gsap.to(knobs, { rotate: (i) => 110 + i * 37, transformOrigin: "50% 50%", ease: "none", scrollTrigger: { trigger: u, start: "top bottom", end: "bottom top", scrub: true } });
  });
}

/* ---------------- process line ---------------- */
const proc = $(".process__line i");
if (proc && !reduced) gsap.fromTo(proc, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".process", start: "top 70%", end: "bottom 60%", scrub: true } });

/* ---------------- magnetic buttons and spotlight cards ---------------- */
if (fine && !reduced) {
  $$("[data-magnetic]").forEach((b) => {
    const qx = gsap.quickTo(b, "x", { duration: 0.6, ease: "power3.out" }), qy = gsap.quickTo(b, "y", { duration: 0.6, ease: "power3.out" });
    b.addEventListener("pointermove", (e) => { const r = b.getBoundingClientRect(); qx((e.clientX - r.left - r.width / 2) * 0.28); qy((e.clientY - r.top - r.height / 2) * 0.38); });
    b.addEventListener("pointerleave", () => { qx(0); qy(0); });
  });
  $$(".spot").forEach((c) => {
    c.addEventListener("pointermove", (e) => { const r = c.getBoundingClientRect(); c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px"); });
  });
  $$("[data-tilt]").forEach((c) => {
    const rx = gsap.quickTo(c, "rotationX", { duration: 0.8, ease: "power3.out" }), ry = gsap.quickTo(c, "rotationY", { duration: 0.8, ease: "power3.out" });
    c.addEventListener("pointermove", (e) => { const r = c.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - 0.5) * 8); rx(-((e.clientY - r.top) / r.height - 0.5) * 8); });
    c.addEventListener("pointerleave", () => { rx(0); ry(0); });
  });
}

/* ---------------- FAQ: one open at a time, animated ---------------- */
$$(".faq details").forEach((dt, i, all) => {
  dt.addEventListener("toggle", () => { if (dt.open) all.forEach((o) => { if (o !== dt) o.open = false; }); });
});

/* ---------------- refresh after fonts and images settle ---------------- */
window.addEventListener("load", () => ScrollTrigger.refresh());
if (d.fonts && d.fonts.ready) d.fonts.ready.then(() => ScrollTrigger.refresh());
window.APMotion = { gsap, ScrollTrigger, lenis };
