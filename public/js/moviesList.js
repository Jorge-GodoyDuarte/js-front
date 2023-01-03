window.addEventListener('load', () => {
    // capturo los selectores
let body = document.querySelector('body');
let h1 = document.querySelector('h1')

// ------------------------------------------------- 
/* creo la variable bodyOscuro y le asigno un prompt despues pregunto 
si quiere le aniado el background y la clase fondoMoviesList */
let bodyOscuro = prompt('¿Desea modo oscuro?')
if(bodyOscuro == "si" || bodyOscuro == "Si" || bodyOscuro == "SI"){
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add('fondoMoviesList')
}

//--------------------------------------------------

h1.innerText = "LISTADO DE PELÍCULAS"
h1.style.color = "white"
h1.style.backgroundColor = "teal"
h1.style.padding = "20px"
})






console.log('HOLAAA')