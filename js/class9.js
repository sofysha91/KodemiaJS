// Función que reciba un array de nombre y esta debe devolver un string con las iniciales de los nombre
 
// getInitial(['Ferdinand','Jose','Maria','Dora']) -> FJMD


// let names = ['Ferdinand','Jose','Maria','Dora'];

// const iniciales = (arr) => {   

//     let inicialesArr = arr.reduce((acc, cv) => {
//         acc += cv[0].toUpperCase();
//         return acc;
//     }, "");   
    
//     return inicialesArr;
// }

// let result = iniciales(names);
// console.log(result);

/*Practica
Dado una arreglo compuesto por arreglos,
* crea una función que calcule la suma de los arreglos
*
* additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
* -> 18*/

// Practica
// Dado una arreglo compuesto por arreglos,
// * crea una función que calcule la suma de los arreglos
// *
// * additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
// * -> 18

// let arrays = [[1,2,3], [1,3,2], [3,2,1], 2];

// const sumarArray = (input)=> {
//     let arrayAccum = 0;
//     input.forEach(item => {
//         if(item instanceof Array)
//         {
//             let result = item.reduce((accum, cv) =>{
//                     accum += cv;
//                     return accum;
//                 },0);
//             arrayAccum += result;
//         }
//         else{
//             arrayAccum += item;
//         }
        
//     });
//     return arrayAccum;
// }

// sumarArray(arrays);
// console.log(sumarArray(arrays));


// función con .reduce()
// * Dado un array de numeros, obtener la suma de solo los elementos positivos
// * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
// * -> 42

let nums = [ 1, -4, 12, 0, -3, 29, -150];
const addAllPositives = (array) => {
    let result = array.reduce((accum, cv) =>{
        //console.log(cv)
        if(parseInt(cv) > 0)
         {
            accum += parseInt(cv);
            //console.log(accum);
         }
         return accum;
    },0);
    return result;
}
console.log(addAllPositives(nums));
