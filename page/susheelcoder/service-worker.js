const CACHE_NAME = 'susheelcoder_404';
const OFFLINE_URL = '/';
const NOT_FOUND_URL = '/pages/404.html';

const ASSETS_TO_CACHE = [
  '/',
  'index.html',
  '404.html',

];


/* ================= INSTALL ================= */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

/* ================= ACTIVATE ================= */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

/* ================= FETCH ================= */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 404) {
            return caches.match(NOT_FOUND_URL);
          }
          return response;
        })
        .catch(() => {
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Static files (CSS, JS, images)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return cachedResponse || fetch(request);
    })
  );
});