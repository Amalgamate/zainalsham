const CACHE_NAME = 'zain-alsham-v2'
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/zeyn-alsham-LOGO.png',
  '/zeyn-alsham-LOGO-white.png',
  '/images/majboos_dish.png',
  '/images/levantine_mezze.png',
  '/images/saffron_kunafa.png',
  '/images/chef_fire_grill.png',
  '/images/spiced_kebabs.png',
  '/images/barbecue_fest.png'
]

// Install event - Cache core shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching App Shell assets')
      return cache.addAll(ASSETS_TO_CACHE)
    })
  )
  self.skipWaiting()
})

// Activate event - Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Clearing old cache:', cache)
            return caches.delete(cache)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - Serve from cache when offline, otherwise fetch and cache dynamically
self.addEventListener('fetch', (event) => {
  // Only cache GET requests and local scope assets
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version immediately
        return cachedResponse
      }

      // Fallback to network
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse
        }

        // Cache newly fetched resource dynamically
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone())
          return networkResponse
        })
      }).catch(() => {
        // Return offline page/message if network fails
        console.log('[Service Worker] Resource offline fetch failed')
      })
    })
  )
})
