const version = 'v1';

this.addEventListener('activate', (event) => {
  console.log('activate');

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== version) {
          return caches.delete(key);
        }
      }));
    })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((value) => {
      console.log('"' + event.request.url + '" is cached => ' + String(value !== undefined).toUpperCase())

      if (value)
        return value;

      return fetch(event.request).then(function(response) {
        if (/chrome-extension/.test(event.request.url))
          return fetch(event.request);

        return caches.open(version).then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

this.addEventListener('install', (event) => {
  console.log('install');
  this.skipWaiting();
});

this.addEventListener('message', (event) => {
});

this.addEventListener('push', (event) => {
  console.log('push');
});

this.addEventListener('sync', (event) => {
  console.log('sync');
});
