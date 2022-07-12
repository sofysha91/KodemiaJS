/*Ejercicio 1 
* Función que reciba una palabra
* Retorna la palabra invertida
* La reversa del string lo haremos usando métodos de array
*  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
*
* reverseStr('hola mundo')
* -> 'odnum aloh'*/
let str = "Hola mundo";

const palindrome = (string) => {
    return Array.from(string).reverse().join('');
}

console.log(palindrome(str));

/* Ejercicio 2 
* Dado el siguiente arreglo de ciudades
*   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
* Generar una función que capitalize cada elemento del array
* => Se puede resolver con .forEach() o .map()*/

let arrayCities = ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA'];

const capitalize = (arrayCities) => {   
    newCities = arrayCities.map(element => {
        return element[0].toUpperCase() + element.slice(1).toLowerCase();
    });
    return newCities;
}

console.log(capitalize(arrayCities));

/* Ejercicio 3
* Dado un arreglo con nombres de personas,
* Función que devuelva un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
*
* onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
* -> ['Ana','Ivan','Oscar']
*
* => Se puede resolver con .forEach() o .filter()
*/

let names = ['jorge','ana','ivan','sergio','oscar'];

const onlyNamesVowels = (array) => {   
    newArray = array.filter((currentValue, index, copiaArrOriginal) => {
        if (currentValue[0].search(/[aeiou]/gi) != -1 ) {
            return currentValue;
        }
    });
    return newArray;
}

console.log(onlyNamesVowels(names));