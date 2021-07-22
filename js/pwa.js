if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('se instalo correctamente', registrado))
        .catch( error => console.log(error))
} else {
    console.log('Service Workers no soportados');
}