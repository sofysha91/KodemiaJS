//? Coleccion de datos que puede albergar otros datos (cualquier tipo)

let koder1 = "Mariana";
let koder2 = "Marco";

//const koders = ['Mariana', 'Marco', 'Cris', 62, undefined, ["string", 123, undefined]];

//Bracket notacion -> []
//tienen index -> 0,1,2,....

/*console.log(koders[0]);
console.log(koders);
console.log(koders[5][0]);*/



koders = ['Mariana', 'Marco', 'Cris'];

//String -> regresa el array como cadena
/*console.log(koders.toString());

//Pop -> Regresa y remueve el ultimo elemento de un array
console.log(koders.pop());
console.log(koders);*/


//Includes -> verifica si el valor ya existe en el array
console.log(koders.includes("Mariana"));
console.log(koders.includes("Sofy"));

console.log(koders.reverse());
