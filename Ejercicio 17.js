/*17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad)*/

let valor1=prompt("Ingrese un numero");



let contador =0;
for(let i=2;i<100;i++)
{
    
    
    if(valor1%i==0)
    {

        if(valor1<i||valor1>i)
        {
            contador++

        }

        
    }
}

if(contador>=1)
{
    console.info(valor1+" no es primo");
}else{
    console.info(valor1+" es primo");

}