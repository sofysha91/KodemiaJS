/**
 * Dado un arreglo de koders
1. Generar una lista con la clase "koders"
2. Agregar a cada koder en esa lista
3. A todos los koders agregarles la clase "item koder"
 */

/*let koders =  [
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

let list = document.createElement('ul');
list.setAttribute("class", "koders");

let body = document.querySelector('body');

body.appendChild(list);

koders.forEach(koder => {
    let item = document.createElement('li');
    item.textContent = `${koder.name} ${koder.lastName}`;
    item.setAttribute("class", "item_koder");
    list.appendChild(item);
});*/

//! 7/20/2022
//? Ejercicio - Repicar este markup (HTML) usando JS innerHTML
/*<ul id="menu" class="menu">
       <li class="item__menu">Home</li>
       <li class="item__menu">Products</li>
       <li class="item__menu">About Us</li>
   </ul>
*/

let items = ["Home", "Products", "About Us"];

const createMenu = (arrMenu) => {
    let menu = `<ul id="menu" class="menu">`;
        menu += items.reduce((acc, cv) => {
            acc += `<li class="item__menu">${cv}</li>`;
            return acc;
        }, '');
    menu += "</ul>"; 
    return menu;
}

let hmwDiv = document.querySelector(".homework");

hmwDiv.innerHTML = createMenu(items);

//? Ejercicion tabla de koders
/*Dado del array dado, crear una tabla */
let koders =  [
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

const createTable = (arrKoders) => {
    //create table 
    let table = "<table class='table table-striped'>";
    //create headers
    table += "<thead><tr>";
    
    Object.keys(arrKoders[0]).forEach(key => {
        table += `<th>${key}</th>`;
    });
    table += "</tr></thead>";

    //Fill table
    table += "<tbody>";
    arrKoders.forEach((koder) => {
        table += "<tr>";
    
        Object.values(koder).forEach(data => {
            table += `<td>${data}</td>`;
        }); 
        table += "</tr>";
    }); 
    table += "</tbody>";
    //end table
    table += "</table>";

    return table;
}

let tableDiv = document.querySelector(".table-koders");

tableDiv.innerHTML = createTable(koders);