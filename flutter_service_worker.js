'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a543b9622f7bf1a340a8a6682d09ad17",
".git/config": "f2c704d559d412ac5f7d7c6e71a6b6da",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "7708bba890c03b8fe8820da7a277acbe",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "addcbcb4fbf4f2ddc6c00fc8122e3abb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8cd60558ff54391957adc0a3232a8a9",
".git/logs/refs/heads/abc": "c21f3489303d4d8cbe398537ac695a12",
".git/logs/refs/heads/master": "112f2f3daacd22ddc45f30edd7da36cd",
".git/logs/refs/remotes/origin/abc": "2d0d1d07e44009ffcedb78f72db6a7a3",
".git/objects/00/4c41fc9d19203d2534f591b27b7435b85e8b2a": "cd0169ffeae6530072a412448b15c429",
".git/objects/00/7c570d7eda1ca7bebcf2e4023c8604a12f2a31": "967b864a53c89dc3e5619f0f36b35ae2",
".git/objects/10/2c7250df7c603c81ec8d861f0dc7bc9a80505d": "6a5cf24729fbda6cd8cddf0c0f0488b9",
".git/objects/10/6fe65ab94ee0c553caf3beb1e326942221828b": "f6fa5f56f62b0c5988e4bdd5d47967e6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3b/6c1d8f25acbc1eb765615186c96d9fc2735978": "92b9222e1af0a107cb40dcae81b42506",
".git/objects/47/7ff8d54af71b320cf83aeb4b03802e9a21b70d": "d58b8795a239dc0739c13e55ed8ee716",
".git/objects/48/3e062d56e2c132c2b70de1a80d1d2907b16332": "4cf0e30c27e985869dab6c54e9d66788",
".git/objects/48/f4a00e6327d4b83488252207da1c1f65658ce5": "b31eb65b143093ec7ce24ca50ec5640f",
".git/objects/5d/2fa31596fca7b7b9d5b972b5a3bc7d3fb39507": "ea6e733b3a08e8c3a12185abec9a2c98",
".git/objects/5e/f1cb1f863ad3959141f688cba9e964926cbd77": "ae282667e22b024b2cfe87b9fe8e431c",
".git/objects/71/06c704b49e58481e20bd3612799271dfbb7039": "fe594819458640e32089ffba1b8373ea",
".git/objects/72/44e9c3f16da4f0a509682dac35d24e34f9c143": "47201c04b8eae54262f8593822dfd48f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/0a820a4d1462ac703a17fe5d4d568bd52cc294": "9c663d823ea80e287a83cbff4c0c114e",
".git/objects/88/051833836bff490582bffb1209ec3f987a6f01": "c938d89dc378ef6389ff72d408d20b2c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/16f4f7fce0c768d1a729053ea4dd574168a63b": "a0bd6528f967a5060f8327b9ac1e2fc7",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/92ac0767797012824f3ba2f0146c24e2c9f7e4": "69a83184e0e77ccda701af1af62f7a1b",
".git/objects/b7/b61772eb24ec88f2863379d3d7468d57500c07": "c1766eacb5f67cc1009aa3676a399731",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/a277a90c304718aa67f407da9c125656313778": "a4b222920628e8f1270f4ec9ef2309db",
".git/objects/be/9a8172dc51ec4c993c80e84f1990fd2f273e02": "34dcf754a5ac0d398161ba1a32ad23b6",
".git/objects/cb/cab13f78511ac264178a602c62b90da545c1e8": "880a223ef55fa91545a1bdb4d6a973ec",
".git/objects/cd/f0a8c63b6759332d711b15d1dcaab3d929a361": "5a8994eac22a64f0b902f0d6f71c2589",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/505f0c3a6ca89a8100c24f4604c6849374f65d": "3404342160cdd9073625f651cfbe30f5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/abc": "76450aa052052fd67804822b6432d546",
".git/refs/heads/master": "f8eb733ea7a1e67b8f569e243cea5002",
".git/refs/remotes/origin/abc": "76450aa052052fd67804822b6432d546",
"assets/AssetManifest.json": "0e0d900ce4f8384e39715e28010aeb76",
"assets/assets/annesha.jpg": "cf40d7d065a0b904ba92a2f5a15f70ad",
"assets/assets/aryan.jpg": "9be483b430bcf7a0b80425f4777fe1e4",
"assets/assets/couple.jpg": "063f5eea1d747ffd35378373274854c0",
"assets/assets/devil.jpg": "a321fbf844060c675b98fb26f19fd084",
"assets/assets/us.jpg": "bcfea16a781c83978434385878ef2880",
"assets/FontManifest.json": "bd9bc150883f26f0c3324ca05ac66c3b",
"assets/fonts/Danger.ttf": "748cf9cd8b6bfb7028598880f1faeff3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Valentine.ttf": "b153c17922ac84e03df6cd61d43deabd",
"assets/NOTICES": "a896c6b106187889ac9979d9afeb4178",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3583a304c57cdb2fecc6ab0f8e8e8626",
"/": "3583a304c57cdb2fecc6ab0f8e8e8626",
"main.dart.js": "c2f9b2ee7c58ee30c10e49641a1364d7",
"manifest.json": "6b32177fee2c3f45102f8f534e8f14a3",
"version.json": "389e9e2eea11fd3716f8d41c79fa3dfc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
