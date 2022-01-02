/*15. Escribir un programa que escriba en pantalla los divisores de un número dado*/

let numero=prompt("Ingrese un numero");

for(let i=1;i<100;i++)
{
    if(numero%i==0)
    {
        console.info(numero+" es divisible por "+i);
    }
}