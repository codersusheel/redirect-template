const CACHE_NAME = "redirect-cache-v1";

self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME).then((cache) => {

            return cache.add("/index.html");

        })

    );

});

self.addEventListener("fetch", (event) => {

    event.respondWith(

        fetch(event.request).catch(() => {

            return caches.match("/index.html");

        })

    );

});