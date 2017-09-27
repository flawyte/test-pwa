importScripts('workbox-sw.prod.v1.3.0.js');

const workboxSW = new self.WorkboxSW();
workboxSW.precache([]);

// Custom code

workboxSW.router.registerRoute(
  /.*500px.*/,
  workboxSW.strategies.networkFirst()
);

self.addEventListener('install', function(event) {
  if (typeof self.skipWaiting == 'function')
    self.skipWaiting();
});
