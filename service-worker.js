/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "0739e0ab657a8f9ee76973e50728f491"
  },
  {
    "url": "404.html",
    "revision": "2a55ed14c5ab86794974fe0e28b74964"
  },
  {
    "url": "assets/css/0.styles.4cdf97b2.css",
    "revision": "4984b2d34b188b8e6226c1056611851f"
  },
  {
    "url": "assets/img/iconfont.cdd1cd30.svg",
    "revision": "cdd1cd303d5828d17626ebbe95966b50"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.dd3ccef3.js",
    "revision": "9da72f13b9d099778c53c51c5075d1f6"
  },
  {
    "url": "assets/js/10.95510565.js",
    "revision": "e669d04e2d1c4e55e267a84ffe9441ae"
  },
  {
    "url": "assets/js/11.4c43b871.js",
    "revision": "bb9240129ded8139fd6d0abda455ff6e"
  },
  {
    "url": "assets/js/12.947af4f3.js",
    "revision": "465db08d704ed09f8a8bf3e94820b932"
  },
  {
    "url": "assets/js/13.d88897df.js",
    "revision": "aacb0f0413c66f68ef4942ec08f60f7e"
  },
  {
    "url": "assets/js/14.584181cc.js",
    "revision": "4d768924fd1b425a4ac8e05003806648"
  },
  {
    "url": "assets/js/15.63f4c118.js",
    "revision": "9c7a24ba97296a25397c265471e07426"
  },
  {
    "url": "assets/js/2.624c50d1.js",
    "revision": "8a5cac625b7b784f309acbe81673c811"
  },
  {
    "url": "assets/js/4.e6c49f44.js",
    "revision": "241abb82e34bb52261b50695da846648"
  },
  {
    "url": "assets/js/5.3f5dc36b.js",
    "revision": "0d769593d71e21312cc229dbfa7dc349"
  },
  {
    "url": "assets/js/6.83457ccf.js",
    "revision": "625a08c8d9f3e5f3077f82e51be7194b"
  },
  {
    "url": "assets/js/7.260c1c19.js",
    "revision": "3b47a8126c741cfd613e35ae2aab9457"
  },
  {
    "url": "assets/js/8.9cfb47fa.js",
    "revision": "4e61fe55679427a3f27cdfbf44500b73"
  },
  {
    "url": "assets/js/9.7d1574c4.js",
    "revision": "e09ad21fd0542d8f7c3a55c95614aca0"
  },
  {
    "url": "assets/js/app.fbdc5e37.js",
    "revision": "d0b499664768bdb049563e0b08f8aabb"
  },
  {
    "url": "blog/index.html",
    "revision": "7843960dfc38cd33af5d2b512c74faa3"
  },
  {
    "url": "categories/index.html",
    "revision": "fafd7a2298f869cfba0ecbcba9d5575b"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "201713fb7e1c2984a2d3c46916944994"
  },
  {
    "url": "hy.jpg",
    "revision": "39a777c22e840b0469249f05d2f70bb0"
  },
  {
    "url": "index.html",
    "revision": "fe6443d2c6b24f543f8b5aa62f785ff6"
  },
  {
    "url": "logo.jpg",
    "revision": "1c06b52023e34ff06a5d33354315b7d1"
  },
  {
    "url": "tags/css.html",
    "revision": "54b6375244d732698287ddbe5d31082a"
  },
  {
    "url": "tags/index.html",
    "revision": "a3a90f0067e9d890c5324922425d8e3d"
  },
  {
    "url": "tags/web前端.html",
    "revision": "69865d6d744d35b6485033a395f58c04"
  },
  {
    "url": "tags/响应式.html",
    "revision": "c8dd4c5a5782252b7a673867fee3f72a"
  },
  {
    "url": "tags/移动端.html",
    "revision": "74e25ed396c1014f50c65d1e0a4e5ca4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
