//! Funciones
    // -> Son elementos escenciales del desarrollo y nos ayuudas, que nos permiten encapsular lineas codigo (statement) en un
    //  indentificador al cual podemos hacerle referenciaa para reutilizar las mismas 
    //  * Ojo -> funciones anonimas

    //? Para utilizar funciones:
    //? 1. Declara la funcion 
        //? 1.1 -> utilizando la palabra reservada "function"
        //? 1.2 -> Identificador de la funcion
        //? 1.3 -> El parametro o la lista de parametros entre parentesis {param1, param2}
        //? 1.4 -> Bloque de codigo -> {}
        //? 1.5 -> Opcional -> ? retorno

        //Ejemplo de funcion
        function funcionSuma(){
            console.log('Esto es una funcion');
        }
    
    //? 2. Invocar o llamar la funcion
        //* Declarar una funcion no la ejecuta
        //? 2.1 -> Invocarla o llamarla de forma tacita
        //? 2.2 -> Al invocar la funcion estamos ejecutando las lineas de codigo definidas en la declaracion
        //! En caso de tener parametros deefinidos es necesario pasarle dichos parametros
        
        funcionSuma();

    //? 3. Retorno
        //? 3.1 Las funciones retornan por defecto 'undefined'
        // * Utilizamos la palabra reservada "return"
        // El codigo que sigue al return no se ejecuta
        function imprimeMensaje(){
            return "hola";
        }

        console.log(imprimeMensaje());

//? 4. Parametros
//? Son variables que toma la funcion al momento de su definicion -> son neutro o agnosticos

function imprimeMensaje2(p1, p2){
    console.log(p1, p2);
    let result;
    return 2+3;
}

//* argumentos -> son las variables que toma la funcion al momento de ser invocada -> son conocidos o relativamente no conocidos

imprimeMensaje2("hola", "mundo");
