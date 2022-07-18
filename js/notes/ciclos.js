// Ciclos -> loops

//! For

/*for(elemento1; elemento2; elemento3)
{
    //Bloque de código a iterar
}*/

//elemento1 -> Base de codicion a evaluar -> variable numerica -> se ejecuta una sola vez

//elemento2 -> Evaluación, se ejecuta en cada iteracion

//elemento3 -> Incremento o decremento -> se ejecuta con cada iteracion


for(let i= 0; i < 3 ; i++){
    console.log(`La cuenta va en ${i}`);
}

for(let i= 0; i <= 10 ; i++){
    console.log(`5 X ${i} = ${5 * i}`);
}

let text = 'Hola Koders!'
for(let i= 0; i <= text.length-1 ; i++){
    console.log(text[i]);
}

//! While
/* while(elemento1){
    Bloque de codigo  iterar
    ?elemento2 -> incremento o decremento
}*/


let j = 0;
while(j<3){
    console.log(j);
    j++;
}

//! Do While
/* do{
    //Codigo a iterar
}while(elemento1)*/

let k = 0;
do{
    console.log(`5 X ${k} = ${5 * k}`);
    k++;
}while(k<=10)