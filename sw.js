this.addEventListener('activate', (event) => {
  console.log('activate');
  console.warn('Refresh to update!');
});

this.addEventListener('fetch', (event) => {
  console.log('fetch');
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
