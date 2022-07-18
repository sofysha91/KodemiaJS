//? Ejercicio 1 
/*Crea el objeto koder (con al menos 6 propiedades, al menos 1 debe ser otro objeto con 2 o 3 propiedades propias)
Luego imprimir en consola alguna oración que haga uso de algunas de esas propiedades, accedemos a ellas, 
incluida la del objeto anidado
Luego en otro console log, imprime todas las llaves dentro del objeto
Luego en otra console log, imprime todas los valores dentro del objeto
En otro console log imprime cuántos elementos tiene el objeto -> hint: utilizamos un contador*/
let koder = {
    firstName: "Sofy",
    lastName: "Arreguin",
    languages: ["JavaScript", "Python", "SQL"],
    frameworks: ["django", "node", "flask"],
    address:{
        streetAddress: "Test street 1234",
        postalCode: "00000",
        city: "Guadalajara"
    },
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300"
 }

console.log(`El nombre completo del Koder es: ${koder.firstName} ${koder.lastName} y vive en: ${koder.address.streetAddress}, ${koder.address.city}`)

const objectOperations = (obj, operation) => {
    let cont = 0;
    let keys = [];
    let values = [];

    for(key in obj){
        cont++;
        keys.push(key);
        values.push(obj[key]);
    }

    if(operation === "cont")
        return cont;
    if(operation === "values")
        return values;
    if(operation === "keys")
        return keys;

    return null;
}

console.log(`Llaves dentro del objeto: ${objectOperations(koder, "keys")}`);
console.log(`Valores dentro del objeto: ${objectOperations(koder, "values")}`);
console.log(`uántos elementos tiene el objeto: ${objectOperations(koder, "cont")}`);

//? Ejercicio 2.
/*Dado un objeto inicial, hacer los siguientes puntos

1. Agregar el lenguaje 'Go' a la lista de lenguajes
2. Agregar fastApi en frameworks
3. Cambiar el nivel a 4
4. Eliminar la propiedad avatar
5. Agregar una nueva propiedad de edad y poner el valor de 30
6. Imprimir en consola todos los lenguajes  y frameworks dominados
7. Clonar el objeto en uno nuevo
8. Imprimir en consola el nuevo objeto*/ 

const imprime = (array) =>{
    array.forEach((cv) => {
        console.log(cv);
    });
}

imprime(koder.languages);
imprime(koder.frameworks);

koder.languages.push("Go");
koder.frameworks.push("fastApi");
koder.level = 4;
delete koder.avatar;
koder.age = 30;

//console languages y frameworks


const koderClone = {...koder};

console.log('Objeto koder clone:', koderClone);
