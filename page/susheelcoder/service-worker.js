const CACHE = "index-cache";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.add("index.html"))
  );
});

self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).catch(() => caches.match("index.html"))
    );
  }
});