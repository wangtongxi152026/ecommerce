importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a498f1d10a717088813.js",
    "revision": "4b7df96ebb08bd71e51a2ff5a56a704e"
  },
  {
    "url": "/_nuxt/0aa085b4486a8ffdfbeb.js",
    "revision": "4c561e05e9b4840bc791c83dfc125499"
  },
  {
    "url": "/_nuxt/1b211e29f7a21365a5f8.js",
    "revision": "9a76f8a7a2e802bf0daa121e430bd27a"
  },
  {
    "url": "/_nuxt/276446ef09e7a9ea0b46.js",
    "revision": "03ded7ed290939362157a7693224f3f0"
  },
  {
    "url": "/_nuxt/33540990055ef71de38a.js",
    "revision": "bac182904fe2810422a4a018c01f2344"
  },
  {
    "url": "/_nuxt/457ac1cb572f84e95454.js",
    "revision": "0c549f4d60213fff23ec8bb22e29ad6b"
  },
  {
    "url": "/_nuxt/48eb58bbb01cbf0e7ef9.js",
    "revision": "2c2bd44a416acc289675644b650bdd3c"
  },
  {
    "url": "/_nuxt/65affc148dac7fe4c4f5.js",
    "revision": "507a4548d98fd1de8eb127ce9ddc1940"
  },
  {
    "url": "/_nuxt/6de2322e43cd6b067261.js",
    "revision": "949454a0d4f2c028cdfcde7c53f36083"
  },
  {
    "url": "/_nuxt/6ea8dc8e030bca138599.js",
    "revision": "92eab3f13710ca06f379ccbd760851de"
  },
  {
    "url": "/_nuxt/95cb95c2c7054b27e432.js",
    "revision": "c8aa3f06df08cef7482180e81d130871"
  },
  {
    "url": "/_nuxt/a1568b489fd67054359d.js",
    "revision": "f6d6a9485d9c26bab4ce2d7e0ab442e0"
  },
  {
    "url": "/_nuxt/aaf23d83e0ea932fa8b9.js",
    "revision": "f9315ff9dcc1242fd3ed21a537791fd4"
  },
  {
    "url": "/_nuxt/b6cb9704339fa8e9c149.js",
    "revision": "ebf50f2c4bbcaf74ac70371bfc014ae3"
  },
  {
    "url": "/_nuxt/bb8090677e4276966314.js",
    "revision": "9c9356bf853a1dd0076654e55991ce45"
  },
  {
    "url": "/_nuxt/c3476d63aa9a3da130d1.js",
    "revision": "764f76be63cb2b42c333369b6aa6bb81"
  },
  {
    "url": "/_nuxt/c42a61a7cbc357d214f7.js",
    "revision": "e87d6aa61296284a7467cf2bd6b4f5a9"
  },
  {
    "url": "/_nuxt/dd81da6f65937b1ae56b.js",
    "revision": "d24986dbd1e2eabb0772d7067477a509"
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
