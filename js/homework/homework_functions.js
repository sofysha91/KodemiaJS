//? Ejercicio 1 ->
/*  Función que pida una palabra al usuario
    Invierta la palabra y la retorna, almacenamos ese retorno en una variable y al interpolamos en un alert usando template literals
    reversedString('hola') -> 'aloh'*/   
    
    function reverseString(string){
        let strReverse = "";
        for(let i = string.length-1; i >= 0; i--){
            strReverse = strReverse + string[i];
        }
        return strReverse;
    }
    
    let str = prompt("Ingrese una oración");
    let reversedString = reverseString(str);
    
    alert(`${str} => ${reversedString}`);


//? Ejercicio 2 ->
/*  Función que pida 3 numeros como parametro  2 números obligatorios y 1 opcional con valor de 3
    Arroje la suma de esos 3 números
    Posibles resultados
    -> addThreeNumbers(3,4,5) -> 12
    -> addThreeNumbers(3,4) -> 10
    -> addThreeNumbers(3) -> 'Faltan datos'
    -> addThreeNumbers() -> 'Faltan datos'*/

    function addThreeNumbers(num1, num2, num3 = 3){
        if(typeof num1 === 'undefined' || typeof num2 === 'undefined'){
            return "Faltan datos"
        }
        return num1 + num2 + num3;
    }

    console.log(addThreeNumbers(3,4,5));
    console.log(addThreeNumbers(3,4) );
    console.log(addThreeNumbers(3) );
    console.log(addThreeNumbers() );


//? Ejercicio 3 ->
/*  Función que pida al usuario los grados Centigrados en su localidad
    Convertirlos a grados fahrenheit
    Retornar el valor y ese valor usarlo para arrojar un alert con el resultado
    -> convertTemp(25) -> La temperatura es de 77 ºF
    -> convertTemp() -> 'Faltan datos'*/    

    function convertCF(celsius)
    {        
        let f = 0;
        if(typeof celsius === 'undefined' || celsius === ''){
            return "Faltan datos";
        }
        f = (parseInt(celsius) * (9/5)) + 32;
        return `La temperatura en °F es: ${f}` ;        
    }

    let celsius = prompt("Ingrese temperatura en °C");
    let fahrenheit = convertCF(celsius);

    alert(fahrenheit);



//? Ejercicio 4 ->
/*  Función que reciba una numero e imprima las tablas de ese numeri, validamos que ese numero este entre 1 y 10*/

    function tabla(num){
        if(typeof num === 'undefined' || typeof num === ''){
            console.log("Faltan datos");
            return;
        }
        
        num = parseInt(num);
        if(num < 1 || num > 10)
        {
            console.log("Valor incorrecto");
            return;
        }
        for(let i = 0; i <= 10; i++){
            console.log(`${num} X ${i} = ${num * i}`);
        }
    }

    let num = prompt("Ingrese un número del 1 al 10");
    tabla(num);

//? Ejercicio 5 ->
/*  Función que pida al usuario un número (N) entre 1 y 100
    Mandar un alert con suma desde el 1 hasta N
    N debe tener un valor por defecto =  3
    addNumberLimit() -> 6
    addNumberLimit(4) -> 10
    addNumberLimit(5) -> 15*/

    let num2 = 0;
    
    function sumaGauss(num = 3){
        let suma = 0;        
        for(let i = 1; i <= num; i++){
            suma += i;
        }
        return suma
    }   
    
    
    while(num2 < 1 || num2 > 100)
    {
        num2 = parseInt(prompt("Ingrese un número del 1 al 100"));
    }

    let gauss = sumaGauss(num2);
    alert(`La suma de 1 + 2 + ... n es: ${gauss}`);