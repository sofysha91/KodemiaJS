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

/* let list = document.createElement('ul');
list.setAttribute("id", "menu");
list.setAttribute("class", "menu");

let items = ["Home", "Products", "About Us"];

items.forEach(element => {
    let item = document.createElement('li');
    item.textContent = element;
    item.setAttribute("class", "item__menu");
    list.appendChild(item);
});
 */

//Ejercicio
/* let koders =  [
    {
        name: 'Ferdinand',
        lastName: 'Bracho',
        age: 30,
        generation: 2,
        modulos: ['js','python', 'git'],
    },
    {
        name: 'Alfredo',
        lastName: 'Pi',
        age: 20,
        generation: 10,
        modulos: ['Node', 'Cloud'],
    },
    {
        name: 'Ale',
        lastName: 'Pa',
        age: 30,
        generation: 1,
        modulos: ['React'],
    }
 ]

let body = document.querySelector('body');

let table = document.createElement("table");
let tHead = document.createElement("thead");

table.appendChild(tHead);

let thName = document.createElement("th");
thName.textContent = "Nombre";

let thLastName = document.createElement("th");
thLastName.textContent = "Apellido";

let thAge = document.createElement("th");
thAge.textContent = "Edad";

let thGeneration = document.createElement("th");
thGeneration.textContent = "Generacion";

let thModule = document.createElement("th");
thModule.textContent = "Modulos";

tHead.appendChild(thName);
tHead.appendChild(thLastName);
tHead.appendChild(thAge);
tHead.appendChild(thGeneration);
tHead.appendChild(thModule);

body.appendChild(table);

let tBody = document.createElement("tbody");
table.appendChild(tBody);

koders.forEach((koder) => {
    let tRow = document.createElement("tr");

    /* let tdName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdGeneration = document.createElement("td");
    let tdModule = document.createElement("td");

    tdName.textContent = koder['name'];
    tdLastName.textContent = koder['lastName'];
    tdAge.textContent = koder['age'];
    tdGeneration.textContent = koder['generation'];
    tdModule.textContent = koder['modulos'];

    tRow.appendChild(tdName);
    tRow.appendChild(tdLastName);
    tRow.appendChild(tdAge);
    tRow.appendChild(tdGeneration);
    tRow.appendChild(tdModule); 

    Object.values(koder).forEach(data => {
        let td = document.createElement("td");
        td.textContent = data;
        tRow.appendChild(td);
    });   

    tBody.appendChild(tRow);
}); */


/*Practica 
Funcion que reciba como parametro un array de post y que pinte esos post
Refencia -> https://getbootstrap.com/docs/5.2/components/list-group/#custom-content
*/

let list =  document.querySelector(".list-group");

let template = posts.reduce((acc, cv, index) =>{    
    acc += `<a href="#" class="list-group-item list-group-item-action ${index == 0 ? "active" : ""}" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${cv.title}</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">${cv.body}</p>
    <small>And some small print.</small>
  </a>`;
    return acc;
}, '');

list.innerHTML = template;