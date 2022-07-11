//? Ejercicio 1 ->
/*  Función que pida una palabra al usuario
    Invierta la palabra y la retorna, almacenamos ese retorno en una variable y al interpolamos en un alert usando template literals
    reversedString('hola') -> 'aloh'*/   
    
  /*  const reverseString = (string) => {
        let strReverse = "";
        for(let i = string.length-1; i >= 0; i--){
            strReverse = strReverse + string[i];
        }
        return strReverse;
    }
    
    let str = prompt("Ingrese una oración");
    let reversedString = reverseString(str);
    
    alert(`${str} => ${reversedString}`);*/


//? Ejercicio 2 ->
/*  Función que pida 3 numeros como parametro  2 números obligatorios y 1 opcional con valor de 3
    Arroje la suma de esos 3 números
    Posibles resultados
    -> addThreeNumbers(3,4,5) -> 12
    -> addThreeNumbers(3,4) -> 10
    -> addThreeNumbers(3) -> 'Faltan datos'
    -> addThreeNumbers() -> 'Faltan datos'*/

 /*   const addThreeNumbers = (num1, num2, num3 = 3) => {
        if(typeof num1 === 'undefined' || typeof num2 === 'undefined'){
            return "Faltan datos"
        }
        return num1 + num2 + num3;
    }

    console.log(addThreeNumbers(3,4,5));
    console.log(addThreeNumbers(3,4) );
    console.log(addThreeNumbers(3) );
    console.log(addThreeNumbers() );*/

//? Practica Grupal 2
/*Arrow function
    Pedir al usuario una cadena de texto
    Declarar una función flecha para
    Pasarle la oración del usuario como parámetro de la función declarada
    verificar si esa oración es un palíndromo
    Retornar el resultado y mostrarlo al usuario (usando log o aler)
    Por ejemplo:
        // isPalindrome('hola') -> No es un palíndromo
        // isPalindrome('oso') -> SI es un palindromo
 
   Podemos probar con las siguientes ->
   anita lava la tina -> Palindromo
   oso -> Palindromo
   seres -> Palindromo
 
   Hint / Pista
    Quitamos los espacios
*/


let str = prompt("Escriba una oración");

const funcionPalindromo = (str) => {

    let strNoSpaces = str.toLowerCase().replaceAll(" ","");
    let reversedString = "";

    for (let i = strNoSpaces.length - 1; i >= 0 ; i-- ){
        reversedString += strNoSpaces[i];
    }
    
    if (strNoSpaces === reversedString){
        console.log("Es un palindromo")
    }
    else{
        console.log("No es un palindromo")
    }
}

funcionPalindromo(str);
