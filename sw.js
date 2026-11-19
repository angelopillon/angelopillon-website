/* angelopillon.com: the service worker is retired (November 2026).
   It served cached CSS and JS after a redesign, so pages could mix old and new files.
   This version deletes every cache, unregisters itself and reloads open tabs once. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  const ks = await caches.keys();
  await Promise.all(ks.map(k => caches.delete(k)));
  await self.registration.unregister();
  const cs = await self.clients.matchAll({ type: "window" });
  cs.forEach(c => { try { c.navigate(c.url); } catch (err) {} });
})()));
