const C = "sirat-v1", F = ["./", "index.html", "style.css", "icon.svg", "manifest.json", "js/content.js", "js/engine.js", "js/ai.js", "js/app.js"];
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(F)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));
