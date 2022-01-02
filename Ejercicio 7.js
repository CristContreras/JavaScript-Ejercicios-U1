/*7. Escribe un programa que pida 3  números y escriba
en la pantalla el mayor de los tres.*/

let valor1 = parseInt(prompt("Ingrese un numero"));
let valor2 = parseInt(prompt("Ingrese un numero"));
let valor3 = parseInt(prompt("Ingrese un numero"));

if(valor1 == valor2)
{
    if(valor1==valor3)
    {
        alert("Todos los numeros son iguales");
        console.log("Todos los numeros son iguales");
    }else
    {
        if(valor1>valor3)
        {
            alert(valor1+" y "+valor2+"Son iguales");
            console.log(valor1+" y "+valor2+"Son iguales");
        }else
        {
            alert("El mayor es: "+valor3);
            console.log("El mayor es: "+valor3);
        }
    }
}else{
    if(valor1>valor2)
    {
        if(valor1>valor3)
        {
            alert("El mayor es: "+valor1);
            console.log("El mayor es: "+valor1);
        }else{
            if(valor1==valor3)
            {
                alert(valor1+" y "+valor3+" son iguales");
                console.log(valor1+" y "+valor3+" son iguales");
            }else{
                alert("El mayor es: "+valor3);
                console.log("El mayor es: "+valor3);
            }
        }
    }else{
        if(valor2>valor3)
        {
            alert("El mayor es: "+valor2);
            console.log("El mayor es: "+valor2);
        }else{
            if(valor2==valor3)
            {
                alert(valor2+" y "+valor3+" son iguales");
                console.log(valor2+" y "+valor3+" son iguales");
            }else{
                alert("El mayor es: "+valor3);
             console.log("El mayor es: "+valor3);
            }
        }
    }
}





