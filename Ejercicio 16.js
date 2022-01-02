/*16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados*/

let valor1=prompt("Ingrese un numero");
let valor2=prompt("Ingrese otro numero");



for(let i=2;i<100;i++)
{
    if(valor1%i==0&&valor2%i==0)
    {
        console.info(valor1+" y "+valor2+" son divisibles por "+i);
    }
}