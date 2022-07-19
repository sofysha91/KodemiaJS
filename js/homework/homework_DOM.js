/**
 * Dado un arreglo de koders
1. Generar una lista con la clase "koders"
2. Agregar a cada koder en esa lista
3. A todos los koders agregarles la clase "item koder"
 */

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

let kList = document.createElement('ul');
kList.setAttribute("class", "koders");

//let body = document.querySelector('body');

body.appendChild(kList);

koders.forEach(koder => {
    let item = document.createElement('li');
    item.textContent = `${koder.name} ${koder.lastName}`;
    item.setAttribute("class", "item_koder");
    kList.appendChild(item);
});