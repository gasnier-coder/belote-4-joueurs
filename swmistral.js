const CACHE_NAME = 'belote-cache-v1';
const URLS_TO_CACHE = [
  '/belote-4-joueurs/',
  '/belote-4-joueurs/index.html',
  '/belote-4-joueurs/manifest.json',
  '/belote-4-joueurs/icons/icon-192.png',
  '/belote-4-joueurs/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});