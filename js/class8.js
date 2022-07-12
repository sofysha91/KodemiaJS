/**
* Escribir una función
* Reciba como parametro un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs', 'esTAMBUL])
* -> ['México','Rio', 'Los Angeles','Estambul']
* Usar el metodo de array ForEach
*/

/*let arrayCities = ['méxicO','RIo', 'Los AngelEs', 'esTAMBUL'];
let newCities = [];

const capitalize = (arrayCities) => {
    arrayCities.forEach(element => {       
        newCities.push(element[0].toUpperCase() + element.slice(1).toLowerCase());
    });
}

capitalize(arrayCities);

console.log(newCities);*/


let arrayCities = ['méxicO','RIo', 'Los AngelEs', 'esTAMBUL'];

const capitalize = (arrayCities) => {   
    newCities = arrayCities.map(element => {
        return element[0].toUpperCase() + element.slice(1).toLowerCase();
    });
    return newCities;
}
let result = capitalize(arrayCities);
console.log(result);
