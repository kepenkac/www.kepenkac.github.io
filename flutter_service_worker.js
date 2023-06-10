'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "18ec2d648ff616f3b774b7e40fe1663d",
"assets/NOTICES": "a1e97d78da6efa673d4a5cbf49fb920f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43a5b156ce64e132c5e83df4e10daeab",
"/": "43a5b156ce64e132c5e83df4e10daeab",
"kepenk-site/.git/COMMIT_EDITMSG": "fa74ca2a6c0a9834d32212dc69b8f6b7",
"kepenk-site/.git/config": "f6392797ba20ca34bba5a228b851ab53",
"kepenk-site/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"kepenk-site/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"kepenk-site/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"kepenk-site/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"kepenk-site/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"kepenk-site/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"kepenk-site/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"kepenk-site/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"kepenk-site/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"kepenk-site/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"kepenk-site/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"kepenk-site/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"kepenk-site/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"kepenk-site/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"kepenk-site/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"kepenk-site/.git/index": "1c3074cce7158ac4b8c6a3cee4ee5e0b",
"kepenk-site/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"kepenk-site/.git/logs/HEAD": "f5168a685b32a8eced97f9010514e509",
"kepenk-site/.git/logs/refs/heads/main": "08891e35c78438259b13a5b22d437742",
"kepenk-site/.git/logs/refs/remotes/origin/main": "93d7039bfab83c5b6f958f6229f9ab70",
"kepenk-site/.git/objects/01/e61c9672cd5cc5c84fc2c86cea097f0e583217": "27dff760da6e5f8280f0f7a3ab7b618d",
"kepenk-site/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"kepenk-site/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"kepenk-site/.git/objects/06/8539e8b81bfad455ce71d98a46d972e9033ef5": "f5488b5cbbb431d281a9db445cd94b3d",
"kepenk-site/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"kepenk-site/.git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
"kepenk-site/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"kepenk-site/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"kepenk-site/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"kepenk-site/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"kepenk-site/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"kepenk-site/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"kepenk-site/.git/objects/5a/bfefa436eb76adf584665795962a2d79edc011": "478e08c2e88a8b0d0fd67f6f08ca709f",
"kepenk-site/.git/objects/60/17998b98d3372d4d2d3ed215bf8208bf394120": "d81e946b37ca652869dc3ddc3879a179",
"kepenk-site/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"kepenk-site/.git/objects/6c/7a81f59eced8a1dff640cbea7132069552ae29": "8939fe34cde945b9b9e12978b740aa3d",
"kepenk-site/.git/objects/6e/c1895d2c0a84c6046a5681d284561ac7793094": "58e2394a4f94bb6c58829254261397d6",
"kepenk-site/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"kepenk-site/.git/objects/7e/5bea4baae38332cd5bc09fea69586eb09706df": "a97f8b6436df43ca2326954233c421da",
"kepenk-site/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"kepenk-site/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"kepenk-site/.git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
"kepenk-site/.git/objects/94/601b73ea61182ad9723e57865adafe7bbdef6a": "20638c651be9bc56c42248dd3d87ae2b",
"kepenk-site/.git/objects/97/9c9cd7cd942775e1f0968cf7db8a88e2dfa942": "ed691ea8a28e630e513d7231789fdeec",
"kepenk-site/.git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
"kepenk-site/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"kepenk-site/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"kepenk-site/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"kepenk-site/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"kepenk-site/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"kepenk-site/.git/objects/d5/d029f9b1a5673648bcacba8da46d53aad4c9fa": "8888b2962cb85882fe84c854526e3169",
"kepenk-site/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"kepenk-site/.git/objects/d7/a2f964a7eac9610aa538820266caf7765d72fd": "31d898a1b9f0a722a20275e2a6c95dcf",
"kepenk-site/.git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
"kepenk-site/.git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
"kepenk-site/.git/objects/eb/16da4b81316c49a3f982aa8c5d5814ddee6dfd": "4f7f9a25a46606a77e6abf48da908bc2",
"kepenk-site/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"kepenk-site/.git/objects/ee/69faf4c7c86406edd5277231cdadb3c2e800ea": "bfbbe51554c67cbbe22ded8247c04546",
"kepenk-site/.git/objects/fd/56dcd04c2541f2ab17b46eb8566f46a64ea090": "a0681088c7e05b3b59e6a120cf641ead",
"kepenk-site/.git/objects/ff/f427054aacebe12a27b3fe954b99ac14064bd7": "5b6fbde3c4906cea8b84a38fbd288c88",
"kepenk-site/.git/refs/heads/main": "08572d28dcbe090f3a3c9bfd3b2f46c6",
"kepenk-site/.git/refs/remotes/origin/main": "08572d28dcbe090f3a3c9bfd3b2f46c6",
"kepenk-site/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"kepenk-site/assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"kepenk-site/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"kepenk-site/assets/fonts/MaterialIcons-Regular.otf": "18ec2d648ff616f3b774b7e40fe1663d",
"kepenk-site/assets/NOTICES": "a1e97d78da6efa673d4a5cbf49fb920f",
"kepenk-site/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"kepenk-site/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"kepenk-site/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"kepenk-site/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"kepenk-site/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"kepenk-site/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"kepenk-site/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"kepenk-site/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"kepenk-site/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"kepenk-site/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"kepenk-site/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"kepenk-site/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"kepenk-site/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"kepenk-site/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"kepenk-site/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"kepenk-site/index.html": "43a5b156ce64e132c5e83df4e10daeab",
"kepenk-site/main.dart.js": "dde37f0839ee7479420f407a9cc1f0a1",
"kepenk-site/manifest.json": "56d38f345f79446020377d40ac06eb86",
"kepenk-site/README.md": "5e48b9356ffdeea22c01bd110f70fc9f",
"kepenk-site/version.json": "9339c3cb0224bc46f182d5ee632ac950",
"main.dart.js": "dde37f0839ee7479420f407a9cc1f0a1",
"manifest.json": "56d38f345f79446020377d40ac06eb86",
"version.json": "9339c3cb0224bc46f182d5ee632ac950"};
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
