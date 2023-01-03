window.addEventListener('load', () => {
    // capturo los selectores
    let h1 = document.querySelector('h1');
    let section = document.querySelector('section');
    let article = document.querySelector('article');
    let button1 = document.querySelector('.botonAgregar');
    let button2 = document.querySelector('.botonVolver');

    // agrego el un texto al h1 con innerText
    h1.innerText = "AGREGAR PELÍCULAS";
    // le agrego una clase al selector h1 con classList.add
    h1.classList.add('titulo');

    //------------------------------------------------------
    // le agrego una clase al selector section con classList.add
    section.classList.add('fondoCRUD')

    //------------------------------------------------------
    // le agrego una clase al selector article con classList.add
    article.classList.add('fondoTransparente')

    //-------------------------------------------------------
    // le achique las letras para que se alinien los botones
    button1.style.fontSize = "10px";
    button2.style.fontSize = "10px";

})


console.log("holaaaaaa")