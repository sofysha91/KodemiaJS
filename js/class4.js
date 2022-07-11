//! Tarea

//? Tomar un string del usuario
//?     Imprimir en consola el número de caracteres que tiene esa cadena
//?     Imprimir cuantas vocales estan presentes
//?     Imprimir cada uno de los las palabras que hay ('hola koder') => ['hola', 'koders'}


let str = prompt("Ingrese una oración");
let vocales = str.match(/[aeiou]/gi);
let splitResult = str.split(' ');

console.log(`Numero de caracteres: ${str.length}`);
console.log(`Numero de vocales: ${vocales.length}`);
console.log(`Palabras: ${splitResult}`);
console.log(`Repeat method: ${str.repeat(2)}`);
console.log(`ReplaceAll method: ${str.replaceAll(" ", "_")}`);