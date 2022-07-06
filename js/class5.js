/*Practica 1
    Imprimir vocales de string usando for loop
    *Usando solo ciclos y condicionales *
*/

/*let str = prompt("Ingrese una oración");
let strLower = str.toLowerCase().replace(" ","");

for(let i = 0; i < strLower.length; i++){
    if (strLower[i] === 'a' ||
        strLower[i] === 'e' ||
        strLower[i] === 'i' || 
        strLower[i] === 'o' || 
        strLower[i] === 'u'
        ) {
        console.log(strLower[i]);
    }    
}
*/

/*Practica 2
    Imprimir solo las consonantes de un string usando for loop
    *Solo ciclos y condicionales *
*/
/*for(let i = 0; i < strLower.length; i++){    
    if (strLower[i] !== 'a' &&
        strLower[i] !== 'e' &&
        strLower[i] !== 'i' && 
        strLower[i] !== 'o' && 
        strLower[i] !== 'u'
        ) {
        console.log(strLower[i]);
    }    
}*/

/*Practica3
    Pedir al usuario un numero del 1 al 10 e imprimir la tabla de multiplicar de ese número
    Usando loops
*/

/*let num = parseInt(prompt("Ingrese un número del 1 al 10"));
let i = 0;
while(i<10){
    console.log(`${num} X ${i} = ${num * i}`);
    i++;
}*/

//? Practica Grupal 
/*Ejercicio 1
    Pedir el usuario un número entre 10 y 100
    * Imprimir todos los números pares que existen entre 1 y ese número
    * p.ej. 12 -> 2,4,6,8,10,12
    * Usar loops, condicionales...
    hint -> %
*/

/*let num = parseInt(prompt("Ingrese un número del 10 al 100"));

for(let i = 1; i <= num; i++)
{
    if(i%2 == 0)
    {
        console.log(i);
    }
}*/

/*Ejercicio 2
    Pedir al usaurio una oracion
    Imprimir un string con todas las vocales
    Imprimir un string con todas las consonantes
    Resultado de ejemplo
    p.ej. "Hola mundo"
    Consonantes -> hlmnd
    Vocales -> oauo*/

/*let str = prompt("Ingrese una oración");
let strLower = str.toLowerCase().replace(" ","");

let vocales = "";
let consonante = "";

for(let i = 0; i < strLower.length; i++)
{
    if (strLower[i] === 'a' ||
        strLower[i] === 'e' ||
        strLower[i] === 'i' || 
        strLower[i] === 'o' || 
        strLower[i] === 'u'
        ) {
        vocales = vocales + strLower[i];
    } 
    else{
        consonante = consonante + strLower[i];
    }
}

console.log(`Vocales ${vocales} \nConsonantes ${consonante}`);*/

/*Ejercicio 3
    Pedir el usuario una palabra
    Invertir esa palabra e imprimirla en consola
    p.ej. 'Hola' -> 'aloh'*/

/*let str = prompt("Ingrese una oración");
let strReverse = "";
//console.log(str.length);

for(let i = str.length-1; i >= 0; i--){
    strReverse = strReverse + str[i];
}

console.log(strReverse);*/