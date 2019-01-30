importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/21c8242ae0539f0e270f.js",
    "revision": "ec99cb532d491bccec61da85350839ec"
  },
  {
    "url": "/_nuxt/21ddae99463e5a513d25.js",
    "revision": "ee8a1b2b012c44f57e98f4c6fc9c21ad"
  },
  {
    "url": "/_nuxt/2fd30faf82b8b86c5e90.js",
    "revision": "e9d0ad8adc3bbc6908b5a2842a98944d"
  },
  {
    "url": "/_nuxt/3093c6f2741add0bc143.js",
    "revision": "392205aa1dc718355328f0b46fdd464e"
  },
  {
    "url": "/_nuxt/3a17f0e977fb2ab93ef2.js",
    "revision": "bfd16f51135178380718b23f237b4f2d"
  },
  {
    "url": "/_nuxt/405bddef8c9b001b10eb.js",
    "revision": "e3222ae9ed995e50033b7056b8ccc089"
  },
  {
    "url": "/_nuxt/5d79d1bdefbeda0e51bf.js",
    "revision": "395e5bbadf69c236443eb48526218e3f"
  },
  {
    "url": "/_nuxt/66a97f7986434cd4d90c.js",
    "revision": "0455a8d333cc8782925cc1274c6694d9"
  },
  {
    "url": "/_nuxt/6e5898bb8170d76c48d9.js",
    "revision": "852f051415c9c0c2d308adcd8a5fb98e"
  },
  {
    "url": "/_nuxt/7d3fe93918c653650344.js",
    "revision": "149d4db3b229e96041402633f20a2c8c"
  },
  {
    "url": "/_nuxt/81b9090cb36d9be6329b.js",
    "revision": "94d7db8f5401f44ceba4434f8a040fff"
  },
  {
    "url": "/_nuxt/a1ec48db095e1fd04aef.js",
    "revision": "cbd9185a88b93763953fdc263637e2e8"
  },
  {
    "url": "/_nuxt/ae0979415cb844db020a.js",
    "revision": "34ed5362f3444d62d0eded645daec9de"
  },
  {
    "url": "/_nuxt/bcba644ee9a007e616b6.js",
    "revision": "6fd1fbe019e21c95d7d2ce8d31041aab"
  },
  {
    "url": "/_nuxt/c76d493be135b7c07e24.js",
    "revision": "a2f3b9c7c186becc4edfa8c2fabc53c2"
  },
  {
    "url": "/_nuxt/c8c59ae896b4cbfddb35.js",
    "revision": "cff0d1643c8be608208ebd45c8b2fa03"
  },
  {
    "url": "/_nuxt/d6b7a06602272f03af7a.js",
    "revision": "d15153471f79ffba9389af055bffd0e7"
  },
  {
    "url": "/_nuxt/f85c393ba5d10f012895.js",
    "revision": "bf3819e6599240223f40ee81f083f0ac"
  },
  {
    "url": "/_nuxt/fea5696163fc35d86b84.js",
    "revision": "9d541c5a369820f7be7a4da44ea97477"
  }
], {
  "cacheId": "al-dokkaan",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
