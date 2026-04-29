/* ============================================================
   Service Worker — Portfolio Miguel Costemalle Carrandi
   Estrategia:
   - Archivos estáticos (CSS/JS/HTML): cache-first
   - obras.json: network-first con fallback a caché
   - Imágenes: stale-while-revalidate (rápido + actualiza en fondo)
   ============================================================ */

const CACHE = 'portfolio-v2';
const STATIC = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './obras.json',
  './favicon.svg',
];

/* ── Install: precachear archivos estáticos ── */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(STATIC))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: limpiar cachés viejos ── */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* ── Fetch ── */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Solo manejar mismo origen
  if (url.origin !== location.origin) return;

  const path = url.pathname;
  const isImage = /\.(jpg|jpeg|png|webp|gif|avif)(\?.*)?$/i.test(path);
  const isObrasJson = path.endsWith('obras.json');
  const isStatic = /\.(css|js|html|svg)(\?.*)?$/i.test(path) || path.endsWith('/');

  if (isImage) {
    // Stale-while-revalidate: responde desde caché inmediatamente,
    // actualiza en segundo plano
    e.respondWith(swrImage(e.request));
  } else if (isObrasJson) {
    // Network-first: siempre intenta red, caché solo como fallback
    e.respondWith(networkFirst(e.request));
  } else if (isStatic) {
    // Cache-first: estático no cambia frecuentemente
    e.respondWith(cacheFirst(e.request));
  }
});

/* ── Estrategias ── */

async function swrImage(request) {
  const cache = await caches.open(CACHE);
  // Clave sin query string para agrupar versiones
  const cacheKey = new Request(new URL(request.url).pathname);

  const cached = await cache.match(cacheKey);
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(cacheKey, response.clone());
    return response;
  }).catch(() => null);

  return cached || await fetchPromise;
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return cache.match(request);
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}
