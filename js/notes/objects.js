//! Objetos

/*
    Colecciones de datos {key value pairs}
    first_name: "Sofy";

    Tiene caracteristicas -> propiedades
    Lleva a cabo acciones -> metodos

    los objetos en js son colecciones de datos almacenados en una sola variable
*/

/*let academia = {
    nombre: "Kodemia",
    numeroEstudiantes: 80,
    areaEstudio: "Programacion",
    numeroProfesores: 20,
    materias : ["html","CSS","Linux","Javascript"],
    materiaProfesor:{
        html: "Alfredo",
        backend: "Ale",
        talleres:{
            linux: "Alfred",
            git: "Ferdinand",
        },
    },
};*/

//? Acceder a propiedades
//Bracket notation
/* console.log(academia["materiaProfesor"]["html"]);

//Dot notation
console.log(academia.materiaProfesor.talleres.git);

//Agregar nuevas propiedades
const koder = {
    firstName: "Luis",
    lastName: "Rdz",
};

koder.age = 25;
koder.modules = { html: true, css: true }

console.log(koder);

//Eliminar propiedades del objeto

//delete koder.modules;

//Iterar sobre objetos

for(x in koder)
{
    console.log(koder[x]);
} */

/*let koder = {
    firstName: "Sofy",
    lastName: "Arreguin"      
 } */

//! Metodos de objetos
// Keys
/* let keys = Object.keys(koder);
//console.log(keys);

// Create
let createdKoder = Object.create(koder);
createdKoder.firstName = "Araceli";

//console.log(createdKoder);

// Entries
//console.log(Object.entries(koder)); 

// Seal
Object.seal(koder);
//koder.firstName = "Test";
koder.age = 20; */

//console.log(koder);

// values
//console.log(Object.values(koder));

// Assign
/*const obj = {
    name: "Alan Turing",
    age: 120,
  };*/

//const copy = Object.assign({}, koder);

//console.log(copy);


//! Metodos de objetos

const koder  = {
    fName: 'Jose',
    lName: 'Perez',

    fullName: function(){
        return `${this.fName} ${this.lName}`;
    }
}

console.log(koder.fullName());

//! Funciones constructoras de objetos

function Mentor (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const alfredo = new Mentor("Alfredo", "Pizana", 28);

console.log(alfredo);


//! Clases en JS
/* Se utiliza la palabra reservada Class */

class Car {
    constructor(color, modelo){
        this.color = color;
        this.modelo = modelo;
    }
}

let coche1 = new Car('rojo','modelo 1');

console.log(coche1);