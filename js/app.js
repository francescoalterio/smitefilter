import { database } from './db/db.js';


document.addEventListener('DOMContentLoaded', () => {
    cargarDioses(database)
})

listener()
function listener() {
    const btnFiltrar = document.getElementById('btn-filtrar')

    btnFiltrar.addEventListener('click', () => {
        getValues()
    })
}

const cargarDioses = gods => {
    const main = document.querySelector('main')

    gods.forEach( e => {
        const box = document.createElement('div');
        box.classList.add('box-dios')
        box.setAttribute('style', `background-image: url("https://webcdn.hirezstudios.com/smite/god-cards/${e.url}.jpg")`);
        box.innerHTML = `
        <div class="box-datos-dios">
            <div class="box-name-dios">
                <p class="name-dios">${e.name.toUpperCase()}</p>
            </div>
            <div class="box-rolpan-dios">
                <img src="./assets/roles/${e.rol}.jpg" alt="" class="dato-dios">
                <img src="./assets/panteones/${e.panteon}.jpg" alt="" class="dato-dios">
            </div>
        </div>`

        main.appendChild(box)
        console.log('creado');
    })
}

const getValues = () => {
    const rol = document.getElementById('rol').value
    const panteon = document.getElementById('panteon').value
    const letra = document.getElementById('letra').value

    filter(rol, panteon, letra)
}

const filter = (rol, panteon, letra) => {
    const db = [...database]

    if(rol || panteon || letra) {
        const dbFiltered = db.filter( e => {
            console.log(rol, panteon, letra);
            if(rol && panteon && letra) {
                return (e.rol == rol && e.panteon == panteon && e.name.charAt(0) == letra)
            } if(rol && panteon) {
                return (e.rol == rol && e.panteon == panteon)
            } if(rol && letra) {
                return (e.rol == rol && e.name.charAt(0) == letra)
            } if(panteon && letra) {
                return ( e.panteon == panteon && e.name.charAt(0) == letra )
            } if(rol) {
                return (e.rol == rol)
            } if(panteon) {
                return ( e.panteon == panteon ) 
            } if(letra) {
                return ( e.name.charAt(0) == letra )
            }
        
        }) 
        console.log(dbFiltered);

        vaciarMain()
        cargarDioses(dbFiltered)
    } else {
        vaciarMain()
        cargarDioses(database)
    }

}

const vaciarMain = () => {
    const main = document.querySelector('main')

    main.innerHTML = ''
}




