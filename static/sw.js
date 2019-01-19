importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0329cda9f5c1a6bb6969.js",
    "revision": "7d04825675fe9225b6299da3a6f668f6"
  },
  {
    "url": "/_nuxt/04445cb7a968a25b10e9.js",
    "revision": "7ef008ea8eca77a79176bfc767325ecc"
  },
  {
    "url": "/_nuxt/27215015386581b1084a.js",
    "revision": "7ebaac0256c0240b113fb49fa1a4c5a5"
  },
  {
    "url": "/_nuxt/3571d63d9a2e544da7f2.js",
    "revision": "1ac4e659c12eb8006bf20f410e3b44d9"
  },
  {
    "url": "/_nuxt/3a68d11f33ec92cc1956.js",
    "revision": "91681ff875dc1fbe489e40baeeff33a8"
  },
  {
    "url": "/_nuxt/49599c7d769814ae3167.js",
    "revision": "94da6bbed5568b5e736fe7b18eee81c0"
  },
  {
    "url": "/_nuxt/4af6ec9e10a172954d37.js",
    "revision": "823a22b467a7b07595360bf0960f6f93"
  },
  {
    "url": "/_nuxt/61316c2fbd38124b5020.js",
    "revision": "79a4dd8bc10550720dc5ee7ba2e50534"
  },
  {
    "url": "/_nuxt/62fbdaf5fbc4f391c914.js",
    "revision": "1d4e7f96de7d473809ac6cd73a6f182c"
  },
  {
    "url": "/_nuxt/8bdd93b83542fa18f6ff.js",
    "revision": "b632a81712fa18904f221dcafb7b9e73"
  },
  {
    "url": "/_nuxt/9646e42b9378a8bec675.js",
    "revision": "a092c1664e80e8fa6b713d718a67a8a2"
  },
  {
    "url": "/_nuxt/9eb07820a9772cd7b68b.js",
    "revision": "cfa51936cdf8d4f1af14c5d246c5bda7"
  },
  {
    "url": "/_nuxt/a75f97a7961a87fb20d1.js",
    "revision": "b4c202a6809a34eabc28930af9bc2865"
  },
  {
    "url": "/_nuxt/abbffdec61669e6326ee.js",
    "revision": "b813c2c044ce81e2dda90852ec3c6a88"
  },
  {
    "url": "/_nuxt/c3ade1360cf41d2b89e2.js",
    "revision": "ead9c11e92cf045a6955de1087d8ebfa"
  },
  {
    "url": "/_nuxt/cc9d1e5eb84fc3599668.js",
    "revision": "7ad3a2704b919c77b6d7cf592d651b7f"
  },
  {
    "url": "/_nuxt/dc8848a5db007e73d349.js",
    "revision": "d6caa22ba32f79d992b9a185594ea5c0"
  },
  {
    "url": "/_nuxt/e007c54ac8d0f9dd23d2.js",
    "revision": "07856c3c8a4ef745f410c8769244f647"
  }
], {
  "cacheId": "Al-Dokkaan",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
