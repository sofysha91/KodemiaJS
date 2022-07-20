//! DOM = Document Object Model
/* When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects*/

//? Seleccionar elementos
//let test = document.getElementById("titulo");
//let test = document.getElementsByName('h1');
//let test = document.getElementsByTagName('h1');
//let test = document.getElementsByClassName('claseTest');

//?Seleccion por query Selector (usa . y # como en CSS) 
//let test = document.querySelector(".claseTest");
//let test = document.querySelector("#titulo");
let test = document.querySelectorAll('h1');

//console.log(test);

/*let parrafo = document.getElementById('parrafo');
console.log(parrafo);*/

//! Set atributos
//setAttribute(<nombre del atributo>)
//parrafo.setAttribute("hidden", true);

//! Obtener atributos
//getAttribute(<nombre del atributo>)
//console.log(parrafo.getAttribute('id'));

//! Comprobar atributos
//hasAttribute(<nombre del atributo>)
//console.log(parrafo.hasAttribute('hidden'));

//! Eliminar atributos
//removeAttribute(<nombre del atributo>)
//parrafo.removeAttribute('hidden');


//?Crear elementos

//let list = document.createElement('ul');

//! Insertar elemento a otro elemento
/* let body = document.querySelector('body');

body.appendChild(list); */

//!Agregar texto al interior de un elemento
//let item = document.createElement('li');
//item.textContent = 'Esto es texto';


//list.appendChild(item);

//* --------------- 
/* let list = document.createElement('ul');

let body = document.querySelector('body');

body.appendChild(list);

for(let i = 0; i<= 30; i++){
    let item = document.createElement('li');
    item.textContent = `item # ${i}`;
    list.appendChild(item);
} */

//! Otras propiedades de los elementos del DOM
//? textContent
//? innerText
//? innerHTML

let lista = document.querySelector('.lista');

let menuItems = ['comidaChina','Mexicana','Venezolana'];

menuItems.forEach((texto) => {
    lista.innerHTML += `<li class="items">${texto}</li>`;
});

//? classList
lista.classList.add('otra', 'otramas');
lista.classList.remove('otramas');

console.log(lista.classList.value);