const nombreCache = 'apv-1'
const archivos = [
    '/',
    '/index.html',
    '/css/normalize.css',
    '/css/style.css',
    '/js/db/db.js',
    '/js/app.js',
    '/js/pwa.js'
]

self.addEventListener('install', e => {
    console.log('Instalado el serviceWorker');
    
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('Cacheando');
                cache.addAll(archivos)
            })
    )
})

self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    console.log(e);
})

self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => respuestaCache
    )
})