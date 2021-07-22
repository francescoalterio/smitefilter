self.addEventListener('install', e => {
    console.log('Instalado el serviceWorker');
    console.log(e);
})

self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    console.log(e);
})

self.addEventListener('fetch', e => {
    console.log('Fetch...', e);
})