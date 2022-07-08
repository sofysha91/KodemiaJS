// Ejercicio 1
// Escribir un programa de arroje la suma de los múltiplos de 3, 5 o 7 que hay entre 1 y 100
// Resolver con For, While y do While
let result = 0;

for(let i = 1; i<= 100; i++)
{
    if (i % 3 == 0|| i % 5 == 0 || i % 7 == 0)
    {
        result += i;
    }
}
console.log(`Suma con for= ${result}`);

let i = 1;
result = 0; 
while(i<= 100)
{
    if (i % 3 == 0|| i % 5 == 0 || i % 7 == 0)
    {
        result += i;
    }
    i++;
}
console.log(`Suma con while= ${result}`);

i = 1;
result = 0; 
do{
    if (i % 3 == 0|| i % 5 == 0 || i % 7 == 0)
    {
        result += i;
    }
    i++;
}while(i<= 100)

console.log(`Suma con do while= ${result}`);
 

// Ejercicio 2
// Pedir el usuario 1 número entre 1 y 100
// sumar todos los números entre el 1 y el numero ingresado
// Mandar un alert con el total
// Resolver con For, While y do While
// Por ejemplo: 5
// ->  15

let num = 0;
let sum = 0;

while(num < 1 || num > 100)
{
   num = parseInt(prompt("Ingrese un número del 10 al 100"))
}

for(let i = 1; i <= num; i++)
{
    sum += i;
}
console.log(`Suma con for= ${sum}`);

i = 1;
sum = 0
while( i <= num)
{
    sum += i;
    i++
}
console.log(`Suma con while= ${sum}`);

i = 1;
sum = 0
do{
    sum += i;
    i++
}while( i <= num)
console.log(`Suma con do while= ${sum}`);


// Ejercicio 3
// pedir una oracion al usuario
// Contar las letras "a", "e" y espacios,
// Resolver con For, While y do While
// Por ejemplo 'hola kodErs'
//  ->  A -> 1
//  ->  E -> 1
//  ->  Espacios -> 1

let str = prompt("Ingrese una oración");
let strLower = str.toLowerCase();
let a = 0;
let e = 0;
let space = 0;

for(let i = 0; i < strLower.length; i++){
    if(strLower[i] === 'a'){ 
        a++ 
    }
    else if(strLower[i] === 'e'){
         e++ 
    }
    else if(strLower[i] === ' '){ 
        space++ 
    } 
}
console.log(`Ciclo for \nA -> ${a}\nE -> ${e}\nEspacios -> ${space}`);

a = 0;
e = 0;
space = 0;
i = 0;

while(i < strLower.length){
    if(strLower[i] === 'a'){ 
        a++ 
    }
    else if(strLower[i] === 'e'){
         e++ 
    }
    else if(strLower[i] === ' '){ 
        space++ 
    } 
    i++;
}
console.log(`Ciclo while \nA -> ${a}\nE -> ${e}\nEspacios -> ${space}`);

a = 0;
e = 0;
space = 0;
i = 0;

do{
    //strLower[i] === 'a' ? a++ : strLower[i] === 'e' ? e++ : strLower[i] === ' ' ? space++ : null ; 
    if(strLower[i] === 'a'){ 
        a++ 
    }
    else if(strLower[i] === 'e'){
         e++ 
    }
    else if(strLower[i] === ' '){ 
        space++ 
    } 
    i++;
}while(i < strLower.length)
console.log(`Ciclo do while \nA -> ${a}\nE -> ${e}\nEspacios -> ${space}`);