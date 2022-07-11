//Practica 1
    //Declarar y invocar una funcion cualquiera

/*let celsius = 0;
let fahrenheit = 0;

celsius = parseInt(prompt("Ingrese temperatura en °C"));

convertCF(celsius);

function convertCF(celsius)
{
    fahrenheit = (celsius * (9/5)) + 32;
    console.log(`La temperatura en °F es: ${fahrenheit}`);
}
*/

//  Practica
//  Declarar una función que tome uno o más argumentos y haga un retorno, Pueden llevar a cabo alguno de los ejercicios de la prácticas de la sesión 1 o 2 o 3
//  Almacenar el retorno en una variable y imprimir un mensaje usando esa variable -> template literals

let base = parseInt(prompt("Ingrese base"));
let altura = parseInt(prompt("Ingrese altura"));

function areaTriangulo(base, altura){
    return (base*altura) / 2;
}

let area = areaTriangulo(base, altura);
console.log(`El area del triangulo es: ${area}`);