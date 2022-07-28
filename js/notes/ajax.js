//! AJAX - Asynchronous JavaScript and XML

//? Arquitectuuras:
    //* Monolica
    //* Cliente - Servidor

//? CRUD

//! JSON


//? JSON Parse -> De json a objeto


//? JSON stringify -> De objecto a JSON


//! XMLHttpRequest
//*Paso a paso para su uso

//? Instanciamos nuestro objeto*/

const xRe = new XMLHttpRequest();
//console.log(xRe);

//  *Propiedades
//  * readyState
//      *Holds the status of the XMLHttpRequest
//      *0: request not initialized 
//      *1: serve connection established
//      *2: request received
//      *3: procesing request 
//      *4: request finished and response is ready 

//  * Status

//? Definir un callback en nuestro evento onload
xRe.onload = (data) => {
    //console.log(data);
}

//? Abrir la peticion
//request.open(<Metodo http>, <Direccion objetivo>)
/*
  Metodo HTTP - VERBOS HTTP
  GET, POST, PUT, PATCH, DELETE
*/

xRe.open("GET", "README.md");
//console.log(xRe);

//? Enviar nuestra peticion
xRe.send();

//! API - Application programming interface

//Ejercicio
const myRequest = new XMLHttpRequest();

myRequest.onload = (data) => {
    console.log(data.target.responseText);
};

myRequest.open("GET", "https://dummyjson.com/products/1");
myRequest.send();