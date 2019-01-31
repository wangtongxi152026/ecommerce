importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/052ca5bafaf9df230aa1.js",
    "revision": "1ad013016495d097da8e0341c023f15f"
  },
  {
    "url": "/_nuxt/15cc53ab67dc1763783e.js",
    "revision": "c6ccf1ec2f4d2fa54067df2ced4ca712"
  },
  {
    "url": "/_nuxt/278333caa7210c121560.js",
    "revision": "a94f48c2f34955ba3497d26b78a8af8c"
  },
  {
    "url": "/_nuxt/37ae641b6fef22d39591.js",
    "revision": "c680b73691f0909c67ecbb37e12d4433"
  },
  {
    "url": "/_nuxt/3fefc995bfebfb480402.js",
    "revision": "6d651771aa9dc815950d61bc264e329e"
  },
  {
    "url": "/_nuxt/501d4df93642d3d7294a.js",
    "revision": "04b2da46d721c9829a5e29363db5f9bf"
  },
  {
    "url": "/_nuxt/5120590cc225ee36fe58.js",
    "revision": "1fb8413218212f25ebde703daf793591"
  },
  {
    "url": "/_nuxt/6963af3551fee8b17bf9.js",
    "revision": "d3b36e6289177f1d5d73522ce8d3d495"
  },
  {
    "url": "/_nuxt/756e14aeac2026a2cc23.js",
    "revision": "48c975b1b994b898717018cd5b4f71f0"
  },
  {
    "url": "/_nuxt/90a76e625228ecf42fa5.js",
    "revision": "1d6e409f73a7abaec95f0f7d2d672bb7"
  },
  {
    "url": "/_nuxt/96c17c22cf790fe07ad7.js",
    "revision": "3d6604ae52090ccafcd8e6d581ed55c8"
  },
  {
    "url": "/_nuxt/a51a4b9a59d468345394.js",
    "revision": "5d85fb3fbc6138bf86c6080fbeec20ad"
  },
  {
    "url": "/_nuxt/bc133f5e70ac0df5788b.js",
    "revision": "d2bfae2006b79cfef34655877d617e36"
  },
  {
    "url": "/_nuxt/c0c38bf504a385150ec0.js",
    "revision": "171b470d1e696ca01c0ef6964004a872"
  },
  {
    "url": "/_nuxt/ddb2477ce08d3a46375b.js",
    "revision": "532ce027ad14f44e075b931576610198"
  },
  {
    "url": "/_nuxt/e93b8582c69c13af692b.js",
    "revision": "8e0ee6049d794afb4d51ac33c5971268"
  },
  {
    "url": "/_nuxt/ea550e46092c5d3a0b3b.js",
    "revision": "4926d08993d38160562d2f89b29b5159"
  },
  {
    "url": "/_nuxt/f2581143b809ac32eeba.js",
    "revision": "bc71ff77cb75e595dff54d68d26b5ef2"
  },
  {
    "url": "/_nuxt/f5ce7518f454f459918d.js",
    "revision": "605f0796718386689eecfa8e84ce894d"
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
