const CACHE = "404-page";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.add("404.html"))
  );
});

self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).catch(() => caches.match("404.html"))
    );
  }
});