const VERSION = "V1";
self.addEventListener('install', event => {
  event.waitUntil(preCache());
});

self.addEventListener('fetch', event => {
  const requestt = event.request;

  // get
  if(requestt.method != "GET"){
    return;
  }

  // buscat en cache
  event.respondWith(cacheResponse(requestt))

  // actualizar el cache
  event.waitUntil(updateCache(requestt))
})

async function preCache() {
  const cachee = await caches.open(VERSION);
  return cachee.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/style.css',
    '/assets/media/BigBuckBunny_512kb.mp4',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
  ]);
}

async function cacheResponse(request){
  const cachee = await caches.open(VERSION);
  const response = await cachee.match(request);
  return response || fetch('request');
}

async function updateCache(request){
  const cachee = await caches.open(VERSION);
  const responsee = await fetch(request);
  return cachee.put(request, responsee);
}