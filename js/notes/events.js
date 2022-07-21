//! Eventos

/*Estos suceden sobre los elementos de nuestro DOM y podemos capturar y reaccionar a ellos, manmipularlos a nuestro favor. */
//? Tipos de eventos
/**
 * Eventos automaticos
 * Eventos generados por usuarios
 */

//! inline events 
/**
 * onchange  -  An HTML element has been changed
 * onclick  -  The user clicks an HTML element
 * onmouseover  -  The user moves the mouse over an HTML element
 * onmouseout  -  The user moves the mouse away from an HTML element
 * onkeydown  -  The user pushes a keyboard key
 * onload  -  The browser has finished loading the page
 */

const evento = () => console.log("Hola mundo!");

function pasteFunction() {
    //e.preventDefault();
    /*let paste = (e.clipboardData || window.clipboardData).getData('text');
    console.log(paste.toUpperCase());  */
    console.log("Paste!")
}

//! EventListener
/*Es un metodo de los elementos del DOM */

let btn = document.querySelector('.btn-test');

btn.addEventListener('click', () => {
    console.log("Click");
});

//! Event Object
let btnO = document.querySelector('.btn-object');

btnO.addEventListener('click', (e) => {
    console.log(e)
    e.target.title = e.timeStamp;
});