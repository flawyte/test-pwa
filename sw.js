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
    "url": "bower_components/app-layout/app-header-layout/app-header-layout.html",
    "revision": "d3072f8cf30de94a99ac4825d1e07df8"
  },
  {
    "url": "bower_components/app-layout/app-header/app-header.html",
    "revision": "62d69c07d519c29122a10f54fee304af"
  },
  {
    "url": "bower_components/app-layout/app-layout-behavior/app-layout-behavior.html",
    "revision": "a64d340503d802c441f231999bc50513"
  },
  {
    "url": "bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html",
    "revision": "ffadeb52557b2c0fc7a28ff106903622"
  },
  {
    "url": "bower_components/app-layout/app-scroll-effects/app-scroll-effects.html",
    "revision": "47ef4a1229fe38f7ebb0b846676908c9"
  },
  {
    "url": "bower_components/app-layout/app-scroll-effects/effects/blend-background.html",
    "revision": "cb65065f730d76538be3d15794650adf"
  },
  {
    "url": "bower_components/app-layout/app-scroll-effects/effects/fade-background.html",
    "revision": "d7fe94ca7c381f0d814ae8f03e7a1707"
  },
  {
    "url": "bower_components/app-layout/app-scroll-effects/effects/material.html",
    "revision": "93d85d4f6d42fd57d73fda270f8b8b5d"
  },
  {
    "url": "bower_components/app-layout/app-scroll-effects/effects/parallax-background.html",
    "revision": "cb919252b3b9eb1c7d57fc7022353c9a"
  },
  {
    "url": "bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html",
    "revision": "e1917db70703c8af036b1a29fd7d6237"
  },
  {
    "url": "bower_components/app-layout/app-scroll-effects/effects/resize-title.html",
    "revision": "91cbbf08e10ad1d60804d5403f10b679"
  },
  {
    "url": "bower_components/app-layout/app-scroll-effects/effects/waterfall.html",
    "revision": "af6cf17fbb4f94216eea9d2e6c26a775"
  },
  {
    "url": "bower_components/app-layout/app-toolbar/app-toolbar.html",
    "revision": "1969068eeac3ed606025f04bf7871282"
  },
  {
    "url": "bower_components/app-layout/helpers/helpers.html",
    "revision": "1da38888481edb36a5d7f15a8633dd9f"
  },
  {
    "url": "bower_components/app-route/app-location.html",
    "revision": "8fd3320544adb5e25f032dc9ca593d45"
  },
  {
    "url": "bower_components/app-route/app-route-converter-behavior.html",
    "revision": "717082ae29ce5616531c20e1ddc20d3c"
  },
  {
    "url": "bower_components/font-roboto/roboto.html",
    "revision": "22fe760d42278ca3b2b3718390fbb1bd"
  },
  {
    "url": "bower_components/iron-a11y-announcer/iron-a11y-announcer.html",
    "revision": "2147d8e18cb4f776df227ff7c5c6da86"
  },
  {
    "url": "bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html",
    "revision": "ae8bf965145b43d62fec74249f537459"
  },
  {
    "url": "bower_components/iron-behaviors/iron-button-state.html",
    "revision": "40f4d0c50c0df6b151f84006fb1823ac"
  },
  {
    "url": "bower_components/iron-behaviors/iron-control-state.html",
    "revision": "fb2613f2ffc10065e718be1f9969acb5"
  },
  {
    "url": "bower_components/iron-fit-behavior/iron-fit-behavior.html",
    "revision": "fb4a978e3270fc407f4d2d155534a002"
  },
  {
    "url": "bower_components/iron-flex-layout/iron-flex-layout.html",
    "revision": "3e285c2698feec264710fffd609630ad"
  },
  {
    "url": "bower_components/iron-icon/iron-icon.html",
    "revision": "cb0fc2d7d07009ab937d42c387acf9e1"
  },
  {
    "url": "bower_components/iron-icons/iron-icons.html",
    "revision": "f167b940536136378cba6ddbc6bb00d0"
  },
  {
    "url": "bower_components/iron-iconset-svg/iron-iconset-svg.html",
    "revision": "5cc50c1115e3a7691ffb98ee8a50ab0f"
  },
  {
    "url": "bower_components/iron-location/iron-location.html",
    "revision": "a53d089df7c2f93417675531e89dc266"
  },
  {
    "url": "bower_components/iron-location/iron-query-params.html",
    "revision": "922a11c879f369d19d79005b4cb4fabf"
  },
  {
    "url": "bower_components/iron-meta/iron-meta.html",
    "revision": "90994d903095f9fd3bca0318cadf5e1f"
  },
  {
    "url": "bower_components/iron-overlay-behavior/iron-focusables-helper.html",
    "revision": "486e6418f8454f518a23281d0ff3ca99"
  },
  {
    "url": "bower_components/iron-overlay-behavior/iron-overlay-backdrop.html",
    "revision": "bac622a9c9779ee33bfcf0c4eea90bb7"
  },
  {
    "url": "bower_components/iron-overlay-behavior/iron-overlay-behavior.html",
    "revision": "d8e471d88ef10af0b02583a76c9bdf33"
  },
  {
    "url": "bower_components/iron-overlay-behavior/iron-overlay-manager.html",
    "revision": "6f104f16e5d06d343db51ad3d677359a"
  },
  {
    "url": "bower_components/iron-range-behavior/iron-range-behavior.html",
    "revision": "6d67a291eddd5b28eccf030e10619fb1"
  },
  {
    "url": "bower_components/iron-resizable-behavior/iron-resizable-behavior.html",
    "revision": "27c88a20af51af52dcb353d2e5b9f8d8"
  },
  {
    "url": "bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html",
    "revision": "58238ea481cc89dd8bc3eb98d30a2bba"
  },
  {
    "url": "bower_components/paper-behaviors/paper-button-behavior.html",
    "revision": "793782859ac11addc2f665dda089da48"
  },
  {
    "url": "bower_components/paper-behaviors/paper-inky-focus-behavior.html",
    "revision": "891a915a3403caeff1fc3a4a9ed1e9c3"
  },
  {
    "url": "bower_components/paper-behaviors/paper-ripple-behavior.html",
    "revision": "f8da6bdab811221037f001d1b16785c9"
  },
  {
    "url": "bower_components/paper-button/paper-button.html",
    "revision": "e56a59ed88bb90e19df8338c53e984a5"
  },
  {
    "url": "bower_components/paper-icon-button/paper-icon-button.html",
    "revision": "48eec3cbac79a0fc3778854e1b0996ba"
  },
  {
    "url": "bower_components/paper-progress/paper-progress.html",
    "revision": "23cd92972a174049865447ca4adc08c0"
  },
  {
    "url": "bower_components/paper-ripple/paper-ripple.html",
    "revision": "8cb2d836f86ca84aaad9fe07b032276d"
  },
  {
    "url": "bower_components/paper-styles/color.html",
    "revision": "549925227bc04f9c17b52e2e35cd2e26"
  },
  {
    "url": "bower_components/paper-styles/default-theme.html",
    "revision": "5357609d26772a270098c0e3ebb1bb98"
  },
  {
    "url": "bower_components/paper-styles/element-styles/paper-material-styles.html",
    "revision": "8d8d619e6f98be2c5d7e49ca022e423c"
  },
  {
    "url": "bower_components/paper-styles/shadow.html",
    "revision": "1f23a65a20ed44812df26a9c16468e3f"
  },
  {
    "url": "bower_components/paper-styles/typography.html",
    "revision": "195497070df39ff889ce243627cf6589"
  },
  {
    "url": "bower_components/paper-toast/paper-toast.html",
    "revision": "5f7962eee077439a2a72a68871201736"
  },
  {
    "url": "bower_components/polymer/lib/elements/array-selector.html",
    "revision": "fe98ef26af1d3c0203f860abe33c7ea3"
  },
  {
    "url": "bower_components/polymer/lib/elements/custom-style.html",
    "revision": "b246cd8d5813053a40e5babd9afdcd90"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-bind.html",
    "revision": "f3e83e5cc726f3669e23ee66d3636b07"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-if.html",
    "revision": "de86afbdc9f052599c600f668ddfc2f8"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-module.html",
    "revision": "ff7101dc5b037becb673fd313d47eb28"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-repeat.html",
    "revision": "aa4ff8fa7c736931c2d523c58836f4d9"
  },
  {
    "url": "bower_components/polymer/lib/legacy/class.html",
    "revision": "52bb09aa0d90279638bc558a0183a1d7"
  },
  {
    "url": "bower_components/polymer/lib/legacy/legacy-element-mixin.html",
    "revision": "2083539ce63abf615f97e22af769c459"
  },
  {
    "url": "bower_components/polymer/lib/legacy/mutable-data-behavior.html",
    "revision": "a03f5783244490e022bfdee9bc36c1d8"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer-fn.html",
    "revision": "5d99aef273c86bd97b5b35b1252e660a"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer.dom.html",
    "revision": "40839739ebfc3eb5282a7e8ac9c4dbaf"
  },
  {
    "url": "bower_components/polymer/lib/legacy/templatizer-behavior.html",
    "revision": "b68221cfeaa232f815aa9eac5d307d22"
  },
  {
    "url": "bower_components/polymer/lib/mixins/element-mixin.html",
    "revision": "6f9531c70890734c8a69a62b37254bde"
  },
  {
    "url": "bower_components/polymer/lib/mixins/gesture-event-listeners.html",
    "revision": "46d469e21135419c27cb129e0cbcfe2e"
  },
  {
    "url": "bower_components/polymer/lib/mixins/mutable-data.html",
    "revision": "1ee8caa2078cd3302f7ceb8f169dc283"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-accessors.html",
    "revision": "cd90c8922c882b362f184d57f21f03b8"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-effects.html",
    "revision": "c9b6bf09486a42db58770cf87905c815"
  },
  {
    "url": "bower_components/polymer/lib/mixins/template-stamp.html",
    "revision": "e1a1ff3fc2300ef7a072bae1c15c1ec4"
  },
  {
    "url": "bower_components/polymer/lib/utils/array-splice.html",
    "revision": "9c1a8201554264f7ab03047243aa008e"
  },
  {
    "url": "bower_components/polymer/lib/utils/async.html",
    "revision": "16db8592c7ca246f0d7ae821b2f8b7ed"
  },
  {
    "url": "bower_components/polymer/lib/utils/boot.html",
    "revision": "3391dfa5a91291f9a24cc8b7ba090450"
  },
  {
    "url": "bower_components/polymer/lib/utils/case-map.html",
    "revision": "64a92e8ff052e4e0eef6f91c2b377672"
  },
  {
    "url": "bower_components/polymer/lib/utils/debounce.html",
    "revision": "356e336d5a023cf35f84821e37db5e5c"
  },
  {
    "url": "bower_components/polymer/lib/utils/flattened-nodes-observer.html",
    "revision": "082952a0812b3387e8a40710c05987bd"
  },
  {
    "url": "bower_components/polymer/lib/utils/flush.html",
    "revision": "ba27adf065d373f6b0e434d0d8ef6fd9"
  },
  {
    "url": "bower_components/polymer/lib/utils/gestures.html",
    "revision": "a932c0518514a2f405087c3fbc69f126"
  },
  {
    "url": "bower_components/polymer/lib/utils/import-href.html",
    "revision": "d8b6004a95ea428da210fb8ac176b583"
  },
  {
    "url": "bower_components/polymer/lib/utils/mixin.html",
    "revision": "0e4ba1a810f7c2d5df89f7c41f2ffb86"
  },
  {
    "url": "bower_components/polymer/lib/utils/path.html",
    "revision": "15575ff2f79d923e6f9ed443a1ea98b2"
  },
  {
    "url": "bower_components/polymer/lib/utils/render-status.html",
    "revision": "60fa263b678961716ff8fe7e948c8f4a"
  },
  {
    "url": "bower_components/polymer/lib/utils/resolve-url.html",
    "revision": "dfc0c7635dbb36cb322720ca162c05ec"
  },
  {
    "url": "bower_components/polymer/lib/utils/style-gather.html",
    "revision": "b60d81b7ee3a04c859f1bdd2c77b0268"
  },
  {
    "url": "bower_components/polymer/lib/utils/templatize.html",
    "revision": "2fc4924f6cf459f95516819dbc8033ea"
  },
  {
    "url": "bower_components/polymer/lib/utils/unresolved.html",
    "revision": "2ed3277470301933b1af10d413d8c614"
  },
  {
    "url": "bower_components/polymer/polymer-element.html",
    "revision": "31b98668d3a96df5ab93c6fd2dd8d6db"
  },
  {
    "url": "bower_components/polymer/polymer.html",
    "revision": "041f02f3388a7a3c087298fde431df80"
  },
  {
    "url": "bower_components/shadycss/apply-shim.html",
    "revision": "5b73ef5bfcac4955f6c24f55ea322eb1"
  },
  {
    "url": "bower_components/shadycss/apply-shim.min.js",
    "revision": "985834a8133da3bf5ef839002604a080"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.html",
    "revision": "7e28230b85cdcc2488e87172c3395d52"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.min.js",
    "revision": "eb89d3862a054d45bdd7c0a009f0a98c"
  },
  {
    "url": "bower_components/webcomponentsjs/custom-elements-es5-adapter.js",
    "revision": "e6324a1b9a6f7dbac892a472464088db"
  },
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
    "url": "bower_components/webcomponentsjs/webcomponents-loader.js",
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
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
    "revision": "87682762d7ea909a0892d496eda626c8"
  },
  {
    "url": "manifest.json",
    "revision": "a592faf973bd12d3a4e4f2fdaa7fced8"
  },
  {
    "url": "src/core/services/five-hundred-px-service-worker.js",
    "revision": "b3556d466938054746ee3ecce3b8d809"
  },
  {
    "url": "src/core/services/five-hundred-px-service.html",
    "revision": "a5f147755ad85f962c411d414f9acf5d"
  },
  {
    "url": "src/core/services/five-hundred-px-service.js",
    "revision": "ee53540852242d4731469300bed74f0c"
  },
  {
    "url": "src/core/storages/five-hundred-px-storage.html",
    "revision": "e95264f5192222479f114ee016ff3241"
  },
  {
    "url": "src/fragments/home-fragment.html",
    "revision": "9770829f5321911fc4764137723f044d"
  },
  {
    "url": "src/fragments/image-details-fragment.html",
    "revision": "8a5b1c258d4d651e13b1e4f7fe193e81"
  },
  {
    "url": "src/fragments/main-fragment.html",
    "revision": "b96f122b4d20d4ba85990f956227f9f3"
  },
  {
    "url": "src/fragments/splash-fragment.html",
    "revision": "29e246a99975611e39a5fe25c0d233be"
  },
  {
    "url": "src/test-pwa-app.html",
    "revision": "aa94406da19e451edecdeb60ee10f863"
  },
  {
    "url": "src/views/fragments/home-view.html",
    "revision": "8aeb1f3327f559230ceb33ff3cff5642"
  },
  {
    "url": "src/views/fragments/image-details-view.html",
    "revision": "990673e191e4189621dd50b27855e5cd"
  },
  {
    "url": "src/views/fragments/main-view.html",
    "revision": "688e306fc5a5bac46fc9524168ce5940"
  },
  {
    "url": "src/views/fragments/splash-view.html",
    "revision": "64e1e5d42191eee942190a141cd99a16"
  },
  {
    "url": "src/views/image-list-item-view.html",
    "revision": "12517cf4cf5969a95edee5f8b22efdc5"
  },
  {
    "url": "src/views/image-list-view.html",
    "revision": "bae9039d6e11e5e065aecc2b20b1f7f1"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);

workboxSW.router.registerRoute(
  /.*500px.*/,
  workboxSW.strategies.networkFirst()
);

self.addEventListener('install', function(event) {
  if (typeof self.skipWaiting == 'function')
    self.skipWaiting();
});
