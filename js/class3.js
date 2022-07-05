//Practica 1
/*var num1 = parseInt(prompt('Ingresa numero 1'));
var num2 = parseInt(prompt('Ingresa numero 2'));
var num3 = parseInt(prompt('Ingresa numero 3'));

var max = 0;
if((num1 >= num2) && (num1 >= num3)){
    max = num1;
}
else if((num2 >= num1) && (num2 >= num3)){
    max = num2;
}
else{
    max = num3;
}
console.log(max, "es el numero mayor");*/


//Practica 2
/*let num1 = prompt('Ingresa numero 1');
let num2 = prompt('Ingresa numero 2');

num1  > num2 ? console.log('Numero 1 es mayor que numero 2') : console.log('Numer 2 es mayor que numero 1');*/

//Practica 3
/*let num1 = prompt('Ingresa numero 1');
let num2 = prompt('Ingresa numero 2');
let num3 = prompt('Ingresa numero 3');

let result = num1 > num2 && num1 > num3 ? `El numero 1 (${num1}) es el mayor` : num2 > num1 && num2 > num3 ? `El numero 2 (${num2}) es el mayor` : num3 > num1 && num3 > num2 ? `El numero 3 (${num3}) es el mayor` : 'Los numeros son iguales'; 
console.log(result); */

//Practica 4
/*let a = parseInt( prompt('Ingresa numero 1'));
let b = parseInt( prompt('Ingresa numero 2'));

a > b ? console.log("a/b=" ,a / b) : a < b ? console.log("a+b=", a + b) : console.log("a*b=", a * b);
//console.log(result);*/

//Practica 5
/*Calculadora con switch*/

/*console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");

let opc = parseInt(prompt("Elige una operacion"));
let num1 =parseInt(prompt("Ingresa numero 1"));
let num2 =parseInt(prompt("Ingresa numero 2"));

let result;
switch(opc){
    case 1:
        result = num1 + num2;
        break;
    case 2:
        result = num1 - num2;
        break;
    case 3:
        result = num1 * num2;
        break;
    case 4:
        result = num1 / num2;
        break;
    default:
        result = "Operacion no valida";
        break;
}

console.log(`El resultado de la operacion seleccionada es: ${result}`);*/


