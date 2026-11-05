/* angelopillon.com service worker: tools work offline, pages are network first */
const V = "ap-202611051236";
const PRECACHE = ["/", "/it/", "/offline.html", "/assets/css/site.css", "/assets/js/site.js", "/assets/js/dsp.js", "/assets/js/tools/common.js", "/assets/fonts/mona-sans-vf.woff2", "/assets/fonts/hubot-sans-vf.woff2", "/assets/js/tools/meter.js", "/assets/js/tools/stereo.js", "/assets/js/tools/ab.js", "/assets/js/tools/delay.js", "/assets/js/tools/tuning.js", "/assets/js/tools/streaming.js", "/assets/js/tools/camelot.js", "/it/strumenti/", "/it/strumenti/accordatura-kick-808", "/it/strumenti/analizzatore-fase-stereo", "/it/strumenti/calcolatore-delay-riverbero", "/it/strumenti/calcolatore-loudness-streaming", "/it/strumenti/confronto-ab-reference", "/it/strumenti/misuratore-lufs", "/it/strumenti/ruota-camelot", "/loudness-meter", "/tools/", "/tools/ab-reference-player", "/tools/camelot-wheel", "/tools/delay-reverb-calculator", "/tools/kick-808-tuning", "/tools/stereo-phase-analyzer", "/tools/streaming-loudness-calculator"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => Promise.all(PRECACHE.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => null)))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(V).then(x => x.put(r, c)); return res; }).catch(() => caches.match(r).then(m => m || caches.match("/offline.html"))));
    return;
  }
  if (u.pathname.startsWith("/assets/")) {
    e.respondWith(caches.match(r, { ignoreSearch: true }).then(m => m || fetch(r).then(res => { const c = res.clone(); caches.open(V).then(x => x.put(r, c)); return res; })));
  }
});
