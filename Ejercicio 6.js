/*6. Escribe un programa que pida dos números y escriba
 en la pantalla cual es el mayor.*/

 let valor1 = parseInt(prompt("Ingrese un numero"));
 let valor2 = parseInt(prompt("Ingrese otro numero"));
 if(valor1>valor2)
 {
     console.log("El mayor numero es: "+valor1);
     alert("El mayor numero es: "+valor1);

 }else if(valor1<valor2)
 {
    console.log("El mayor numero es: "+valor2);
    alert("El mayor numero es: "+valor2);

 }else {
     console.log("Los numeros son iguales");
     alert("Los numeros son iguales");

 }