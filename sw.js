importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "bower_components/webcomponentsjs/gulpfile.js",
    "revision": "5b9593e6c3a2a87a866c1169114c745e"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi-ce.js",
    "revision": "495de81020abfefd4f0e3dcff6b7fd3e"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi-sd-ce.js",
    "revision": "68bc22bcb5543e6caabd1d66dc9e1ca9"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi.js",
    "revision": "0ac538bae69f6beb629d2357350041e7"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-lite.js",
    "revision": "c89f66cb63a098895f4b1b42eb371673"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-sd-ce.js",
    "revision": "c5f6fe397db634cde89f66c2f1bc2f62"
  },
  {
    "url": "images/icon-256px.png",
    "revision": "bb4b6e7ea1eeb9fe8308e133b17dda0b"
  },
  {
    "url": "images/icon-512px.png",
    "revision": "879fb4d29da54d784ad45a258a2f3e08"
  },
  {
    "url": "index.html",
    "revision": "0c12c29bb6a264c0517315e8cfaf68ad"
  },
  {
    "url": "manifest.json",
    "revision": "33a3c33e89fca3ec065117a99dd6e14b"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);

workboxSW.router.registerRoute(
  /.*500px.*/,
  workboxSW.strategies.networkFirst()
);
