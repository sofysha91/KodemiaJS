//? Coleccion de datos que puede albergar otros datos (cualquier tipo)

let koder1 = "Mariana";
let koder2 = "Marco";

//const koders = ['Mariana', 'Marco', 'Cris', 62, undefined, ["string", 123, undefined]];

//Bracket notacion -> []
//tienen index -> 0,1,2,....

/*console.log(koders[0]);
console.log(koders);
console.log(koders[5][0]);*/



let koders = ['Mariana', 'Marco', 'Cris'];

//String -> regresa el array como cadena
/*console.log(koders.toString());

//Pop -> Regresa y remueve el ultimo elemento de un array
console.log(koders.pop());
console.log(koders);*/


//Includes -> verifica si el valor ya existe en el array
/*console.log(koders.includes("Mariana"));
console.log(koders.includes("Sofy"));

console.log(koders.reverse());*/



//! Callback functions
    //? En Js las funciones son first class citizen

const a = (msg) =>{
    console.log("Este es un mensaje:", msg);
}

const b = (funcion) =>{
    let msg = prompt("Ingresa un mensaje: ");
    funcion(msg);
}

//b(a);


//! Metodos funcionales de Arrays

//? Foreach
/* Recibe un callback function -> currentValue, Index, copy of array
* No necesita un return
* La logica se ejecuta dentro de su bloque de codigo*/

let arrayTest = ['Julio', 'Sofy','Cris','Jose'];

/*const callFun = (currentValue, index, array) =>{
    console.log('Current Value', currentValue);
    console.log('Index', index);
    console.log('Array', array);
}*/

arrayTest.forEach((cv) => {
    console.log(cv);
});

let ages = [22,25,30,35,40]

/*for(let i=0; i< ages.length; i++)
{
    ages[i] += 2;
}*/

let newAges = [];

ages.forEach((cv) => {
    cv += 2;
    newAges.push(cv);
});

console.log(newAges);

//! Map
/*  Crea un nuevo array transformado
    Recibe un callback function con los argumentos definidos
        Current value
        Index
        Array objetico
    Crea un nuevo array con las modificaciones indicadas
    La function callback debe tener un return
    No cambia el array original
    Debe usarse si se va a crear un nuevo array
*/

const numbers = [1,2,3,4,5];

let arr = numbers.map((cv,index,arr) => {
    return cv+10;
});

console.log(arr);

//! Filter
/* Crea un nuevo array filtrado
    Recibe un callback function con los argumentos definidos
        Current Value
        Index
        Array objeto
    El filtrado lo hacemos dentro de la funcion callback
    Crea un nuevo array con las modificaciones indicadas
    La funcion callback debe tener un return
 */

    let newArr = [10,20,30,41];

    let soloPares = newArr.filter((currentValue, index, array) =>{
        if(currentValue % 2 === 0){
            return currentValue;
        }
    });

    console.log(soloPares);

//! Reduce
/*  Recibe 2 argumentos, un callback function y un initialValue
    su callback recibe 4 parametros predefinidos
    Total o previous value o acumulador, CurrentValue, Index, Copy of array
*/

let arr2 = [1,2,3,4,5];

let result = arr2.reduce((acumulador, cv, index, arr) =>{
    acumulador += cv;
    return acumulador;
}, 0);

console.log(result);

const koders2 = ['kelly', 'Sebas', 'Adrian'];

let iniciales = koders2.reduce((acc, cv) => {
    acc.push(cv[0]);
    return acc;
}, []);

console.log(iniciales);

/*const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates);*/

//? Multidimensional array

const multi = [[1,2,3],['s','f']];

multi.forEach((cv) => {
    cv.forEach((cv2) => {
        console.log(cv2);
    });
});