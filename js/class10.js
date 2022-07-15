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

const grades = {
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
console.log(`El promedio de las notas es ${prom}`);