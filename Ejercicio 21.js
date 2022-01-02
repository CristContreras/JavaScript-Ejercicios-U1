/*21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos.*/



let numero = prompt("ingrese algo");

let suma = 0;



//Hasta que no aprete cancel hacer:
//Si el prompt tiene un parseINT entonces no se puede cancelar, queda en un bucle infinito
while(numero != undefined) {
    //funcion para saber si lo ingresa es un numero o no, pasa el string a numero y verifica y lo vuelvo 
    // a poner a string
    if (isNaN(numero)) {
        alert("Ingrese solo numeros");
       // console.log("no es numero");
    }else{
        //Si es numero entonces lo sumo en un acumulador
        suma=suma+parseInt(numero);
    }
    
    numero = prompt("ingrese algo");
}

console.log("La suma total de los numeros ingresados es: "+suma);


