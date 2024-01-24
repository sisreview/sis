'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "060d6d0b9f05328a8e6a3e32901376e8",
"assets/AssetManifest.bin.json": "0d4d186e393fc8517c3113de66a12d1f",
"assets/AssetManifest.json": "601078112c6c14e215add7c1d9fbab21",
"assets/assets/images/1.png": "49c33bd500cea86b29be7e7daf8193f1",
"assets/assets/images/2.png": "d7e1587c91ca1e9da58dd8da64500741",
"assets/assets/images/3.png": "d6a972dde51c67a2fe13f2f4c73d1309",
"assets/assets/images/admission.jpg": "14f945d5c03f2e11f320569c8f01acab",
"assets/assets/images/admission.png": "2b67e988482e18a2047b94155a11689a",
"assets/assets/images/admissiong.jpg": "40f45783c64748b79a62f0097393b7ab",
"assets/assets/images/Australia.png": "d484930b3ec5f71d54268bbed8044ece",
"assets/assets/images/bottom.png": "82cc26b5ef281f7b943fd87f481e9b25",
"assets/assets/images/Canada.png": "274f887374972a0da53eeeca0eca0ce2",
"assets/assets/images/career%25201.jpg": "5a0639d3a61ca97848834deb692c0e7f",
"assets/assets/images/carrer.png": "fef00a35c05044ab45d23a731a5e592e",
"assets/assets/images/carrercon.jpg": "6aedc9c9f269ef471e86a2c63bec846b",
"assets/assets/images/customize.png": "b02994cf9148c22964fd6dc52d7933b2",
"assets/assets/images/customized.jpg": "956dea7109c0caa7d97d6b32b4a657b3",
"assets/assets/images/customized.png": "f9c6b740d35e46ab9f53daa4f1b22c4a",
"assets/assets/images/expertise.png": "217c2d4a86fbb7d827b1ecb0729944b8",
"assets/assets/images/financial.jpg": "52ead12788bc9ca0395c6a5b75179fab",
"assets/assets/images/financial.png": "4295c8c99ed8245ca042d435530fa492",
"assets/assets/images/forex.png": "0aad35b9f96f2e67e5a36b6b97a98dc1",
"assets/assets/images/guidance.jpg": "8f157d38b1ed216d055d6c2042346502",
"assets/assets/images/guidance.png": "674421e94173659cc41cb82d6e583bc9",
"assets/assets/images/immigration.jpg": "10e49b48815919fa3d0eee3595fd60f9",
"assets/assets/images/Logo.png": "30f61e057da4ef0cd22e69a50c7335b0",
"assets/assets/images/Logo1.jpg": "65a14f7998f95b76c9f6b525b0490c7c",
"assets/assets/images/pe.jpeg": "f51e7aea4a68849b23e4c44bc70cd970",
"assets/assets/images/saustralia.png": "8272ff14407ff6c74770a227e192a865",
"assets/assets/images/scanada.jpg": "79a1201e601c5f86d38130bbd18b8985",
"assets/assets/images/scanada.png": "7e40719a01f0da977e9f1ecaae9e4bac",
"assets/assets/images/services.jpg": "afc5ccbd1795efcd29904d7f005f9dc1",
"assets/assets/images/sis.png": "1f6f23481c0c40042955ceb45c0c7acd",
"assets/assets/images/SIS1.png": "bcabbaeb7d1fbfc8fe3dc02c0af8e4e7",
"assets/assets/images/SISL.png": "b7d508c1976ee95cfa7039750032dd78",
"assets/assets/images/sislogo.jpg": "87a0df6f606fc0774c51e81f1090fee8",
"assets/assets/images/suk.png": "29ee610d7fb5bfc4ea40fb6c7b9e4455",
"assets/assets/images/susa.png": "768a0f8d9aa57acd32c6d62904989f42",
"assets/assets/images/transparent.jpg": "057e47aded21eb62d4ae0738543d9bfe",
"assets/assets/images/transparent.png": "8509b5645f1b8bbe2fbafacd06ac4615",
"assets/assets/images/travel.png": "9b1f8d518440541e5ad1ee65c47e5cb3",
"assets/assets/images/UK.png": "ba778cb6151f68b697ab96a3539a64ef",
"assets/assets/images/USA.png": "d2adbae39a5c16d343559eb5ce38f6a5",
"assets/assets/images/visa.png": "053676ee0e7069d560339556c4a78cee",
"assets/assets/images/visa.webp": "c8b748dd77ca2aa9f259f281c7fbbe81",
"assets/assets/images/whiteout.png": "5eae51873b934df474b081deffe53007",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "cea1f3f8671fefb6901610506c63653f",
"assets/NOTICES": "bae947b4516c7b5c366a4f0e463b1137",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bdd891cf38ef3244afec7aa847aabaac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a268ede046f8230fe1120f90eef27474",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8a01fa04564fab9239f26c4c9137c5b5",
"/": "8a01fa04564fab9239f26c4c9137c5b5",
"main.dart.js": "137e216ab708db19aff2e2e2a2d9846e",
"manifest.json": "5470c0e1bab42803c25dd86a4766883e",
"version.json": "c2e9deb6206f12065304479053a08e27"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
