//Dado el siguiente lleva a cabo las las operaciones indicadas

/*const player = {
    score: 88888,
    level: 7,
    lives: 2,
    vitalEnergy: 1,
    isAlive: true,
};
 
//console.log(player); 
 
// ! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
// Realizar código para llevar a cabo las operaciones
const golpeCritico = (p, golpe) =>{
    p.vitalEnergy -= golpe;    
    console.log(`El jugador ha recibido un golpe critico de -${golpe} puntos`);
}

golpeCritico(player, 25);
 
// ! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false
// Realizar código para llevar a cabo las operaciones
const isPlayerAlive = (p) => {
    if(p.vitalEnergy < 0)
    {
        p.isAlive = false;
        return "KO";
    }
    return "Sigue la pelea";
}

console.log(isPlayerAlive(player));
 
// ! 3 Revisamos nuestro jugador
// Realizar código para llevar a cabo las operaciones
console.log(player); 
 
// ! 4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
// Realizar código para llevar a cabo las operaciones

const resetLive = (p) =>{
    if(p.isAlive == false && p.lives > 0){
        p.isAlive = true;
        p.lives -= 1;
        p.level = 0;
        p.vitalEnergy = 100;
        p.score = 0;
    }
}

resetLive(player);
console.log(player);*/

/*Dado el siguiente objeto realiza las siguientes operaciones 
    Un log donde veamos la suma total de notas
    Opcional - Un log donde veamos el promedio de las notas a dos decimales
    Hint, use toFixed() method
*/

/* const grades = {
    first_test: 7.5,
    second_test: 10,
    third_test: 6,
};

const sumaNotas = (objGrades) => {
    let suma = 0;
    for(grade in objGrades){
        suma += objGrades[grade];
    }
    return suma;
}

const promedio = (objGrades) => {
    let suma = sumaNotas(objGrades);
    let totalPropiedades = 0;
    for(grade in objGrades){
       totalPropiedades++;
    }

    return (suma/totalPropiedades).toFixed(2);
}

let suma = sumaNotas(grades);
console.log(`La suma total de las notas es ${suma}`);

let prom = promedio(grades);
console.log(`El promedio de las notas es ${prom}`); */


/**
* Ejercicio 1.
* Realizar una funcion que tome como parametro un objeto
* y devuelva un array de arrays con la siguiente estructura
* [ [key, value], [key, value] ]
* makePairs( { a: 1, b: 2 } )
* => [ ['a', 1], ['b', 2]]
*
*
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*
* Se tiene que realizar 2 soluciones,
* 1 con Object.entries() y
*  Otra con .map()*/

const objeto = { 
    a: 1, 
    b: 2 
}

const makePairs = (obj) => {
    return Object.entries(obj);
}

const makePairsMap = (obj) => {
    let keys = Object.keys(obj); //['a','b']
    
    let key_values = keys.map((key) => {        
       return [key, obj[key]];
    });

    return key_values;
}

console.log(makePairs(objeto));
console.log(makePairsMap(objeto));

/**
* Dado un objeto de salarios
* Crear una funcion que retorne una lista
* con los salarios ordenados de menor a mayor
* orderSalary( salarios)
* -> [4000, 5000, 7000]
hint -> Usar metodo de objetos y luego un metodo de array para ordenar
*/

const salary = {
    1: 4000, 
    2: 5000, 
    3: 7000,
    4: 40000
}

const orderSalary = (obj) =>{
    let salary = Object.values(obj);
    return salary.sort(function(a, b) {
        return a - b;
      });
}

console.log(orderSalary(salary));