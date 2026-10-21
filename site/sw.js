// Ancien service worker de l'application, qui était servi à la racine : on le remplace par ce « désinstalleur ».
// L'application vit maintenant sous /app/ avec son propre service worker.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (/^sirat-v\d/.test(k)) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: "window" })) c.navigate(c.url);
})()));
