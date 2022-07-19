/**
* Practica
* 1. Agregar en nuestro index.html
*  1.1. Un elemento lista <ul></ul> o <ol></ol>
*  1.2 Agregar varios list items dentro de nuestra lista <li></li> con la clase "item"
* 2. Usando Javascript realizamos lo siguiente
*  2.1. A nuestro elemento list debemos agregarle la clase 'lista' y el id 'lista'
*  2.2. A todos los elementos de la lista debemos retirarle la clase "item"
*  2.3. A todos los elementos de la lista debemos agregar la clase  'list__item'
*/

/* let list = document.querySelector('ul');
let listItem = document.querySelectorAll('li');

list.setAttribute("id", "lista");
list.setAttribute("class", "lista");

listItem.forEach(element => {
    //element.removeAttribute("class");
    element.setAttribute("class", "list__item");    
}); */

/*
Ejercicio 1 - Repicar este markup (HTML) usando JS
 
<ul id="menu" class="menu">
       <li class="item__menu">Home</li>
       <li class="item__menu">Products</li>
       <li class="item__menu">About Us</li>
   </ul>
*/

let list = document.createElement('ul');
list.setAttribute("id", "menu");
list.setAttribute("class", "menu");

let body = document.querySelector('body');

body.appendChild(list);

let items = ["Home", "Products", "About Us"];

items.forEach(element => {
    let item = document.createElement('li');
    item.textContent = element;
    item.setAttribute("class", "item__menu");
    list.appendChild(item);
});
