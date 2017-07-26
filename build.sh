#!/bin/bash

polymer build

cp src/core/services/*-service.js build/default/src/core/services/
cp workbox-cli-config.js build/default/
cd build/default/
workbox-cli generate:sw

cat >> sw.js << EOM

workboxSW.router.registerRoute(
  /.*500px.*/,
  workboxSW.strategies.networkFirst()
);

self.addEventListener('install', function(event) {
  if (typeof self.skipWaiting == 'function')
    self.skipWaiting();
});
EOM
