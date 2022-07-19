/**
* Dado un array de objetos koders
* Imprimir en consola, todos los nombres de cada koder
*
* Ferdinand Bracho tiene 30 años y es de la generación 2 y su primer modulo es python
* Jose Hernandez tiene 20 años y es de la generación0 20' y su primer modulo es nodeJs
*/
let koders = [
    {
        firstName: 'Ferdinand',
        lastName: 'Bracho',
        age: 30,
        generation: 2,
        modules: ['phyton', 'javascript']
    },
    {
        firstName: 'Jose',
        lastName: 'Hernandez',
        age: 20,
        generation: 20,
        modules: ['nodeJS', 'javascript']
    },
    {
        firstName: 'Sofy',
        lastName: 'Arreguin',
        age: 30,
        generation: 20,
        modules: ['nodeJS', 'javascript']
    }
   ]

const printKoders = (arrKoders) => {
    arrKoders.forEach(koder => {
        console.log(`${koder.firstName} ${koder.lastName} tiene ${koder.age} años y es de la generación ${koder.generation} y su primer modulo es ${koder.modules[0]}`);
    });
}

printKoders(koders);

/**
* Del mismo array de koders
* Obtener la suma de todas las edades
*
*/

const allAges = (arrKoders) => {
    let result = arrKoders.reduce((acc, cv) =>{
        acc += cv.age;
        return acc;
    }, 0);
    return result;
}

let result = allAges(koders);
console.log(`La suma de las edades es: ${result}`);

/**
* Del objeto library (dado mas adelante)
* 1. Obtener el numero de libros que se estan leyendo
* 2. Obtener una lista de todos los autores
* 3. Obtener una lista de todos los Libros
*
*/
let library = [
 {
     author: 'Bill Gates',
     title: 'The Road Ahead',
     readingStatus: true
 },
 {
     author: 'Steve Jobs',
     title: 'Walter Isaacson',
     readingStatus: true
 },
 {
     author: 'Suzanne Collins',
     title:  'Mockingjay: The Final Book of The Hunger Games',
     readingStatus: false
 }
]

const booksStatus = (arrLibrary) => {
    let result = arrLibrary.reduce((acc, cv) =>{
        if(cv.readingStatus === true)
        {
            acc++;
        }        
        return acc;
    }, 0);
    return result;
}

const getAuthors = (arrLibrary) => {
    let result = arrLibrary.map((book) => {        
        return book.author;
     });
 
     return result;
}

const getBooks = (arrLibrary) => {
    let result = arrLibrary.map((book) => {        
        return book.title;
     });
 
     return result;
}

let readingStatusTrue = booksStatus(library);
console.log(`Número de libros que se estan leyendo: ${readingStatusTrue}`);

let authors = getAuthors(library);
console.log(`Lista de todos los autores: ${authors}`);

let books = getBooks(library);
console.log(`Lista de todos los libros: ${books}`);


