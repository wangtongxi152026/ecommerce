importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0be0993e695a9f37530b.js",
    "revision": "333a9ccc0b001bb4712ce4fb18fb25cb"
  },
  {
    "url": "/_nuxt/2e3de75529c4d06d0569.js",
    "revision": "c20ae02843f8ac61fdbc3aede52cf7e4"
  },
  {
    "url": "/_nuxt/3015d09487cf7f07cf55.js",
    "revision": "6a62963a3bf883d1399957f76477d726"
  },
  {
    "url": "/_nuxt/40b3e1cb2f4db22a780c.js",
    "revision": "7a8f1c7390b3ba348752611ea745099f"
  },
  {
    "url": "/_nuxt/63a341eb3a0aaa93aa05.js",
    "revision": "0eae1e79eba9833a74cdf852038bda60"
  },
  {
    "url": "/_nuxt/723d3a57b89371e7b0ac.js",
    "revision": "b290ef1827dda67703c6aeeaca16a172"
  },
  {
    "url": "/_nuxt/95a01a806e8cf5ba1d25.js",
    "revision": "0196a5707520ac9f2c5ea67af5d5c480"
  },
  {
    "url": "/_nuxt/9974743123f4011c875d.js",
    "revision": "37db623a422df1c1bfac6bf964d9563e"
  },
  {
    "url": "/_nuxt/99f64cb774cf8af16771.js",
    "revision": "8731289fb9cdc584eb942a9ebcde8081"
  },
  {
    "url": "/_nuxt/9d03a59efa2f819b0b98.js",
    "revision": "30d7ddc5793ffd401d16f526c5310e49"
  },
  {
    "url": "/_nuxt/ac149308ea76cc725803.js",
    "revision": "69408c6e42ae480d87f1b57412149a2c"
  },
  {
    "url": "/_nuxt/ae0b65fa2b9a963cd50c.js",
    "revision": "528b3ba1aaf5f862489802279f538fe6"
  },
  {
    "url": "/_nuxt/b1dc87ae6885ab27ac08.js",
    "revision": "3bb2d26ba2ba2e5709b52aeded7bdae5"
  },
  {
    "url": "/_nuxt/bcba644ee9a007e616b6.js",
    "revision": "6fd1fbe019e21c95d7d2ce8d31041aab"
  },
  {
    "url": "/_nuxt/c7c28e8e2f2f41b5bf99.js",
    "revision": "dbbaf9d8870eee4b778afa360b410d10"
  },
  {
    "url": "/_nuxt/cdc9113d62a5a9878f0d.js",
    "revision": "951fcd903c9ab86aeff05f4f4412b2cc"
  },
  {
    "url": "/_nuxt/d2785927fa6354ac5873.js",
    "revision": "be628cfb6261383ddac6d161b0de2ef2"
  },
  {
    "url": "/_nuxt/e24398a057c05e1d8e72.js",
    "revision": "e1727293d7d9a0de69bdf76e237751df"
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
