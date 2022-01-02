/*9. Escribe un programa que pida una frase y 
escriba cuantas veces aparece la letra a*/

let frase = prompt("ingrese una frase");
let cantidad = 0;



for(let i = 0; i<frase.length;i++)
{
    if(frase[i]=='a')
    {
        cantidad+=1;
    }
}
if(cantidad==0){console.error("No se encontraron las letras solicitadas");}

console.info("La cantidad de a encontrada es: "+cantidad);

//Otra forma de buscar

/*let letrasFrase = frase.split('');

for(let i = 0; i <letrasFrase.length;i++)
{
    if(letrasFrase[i]=='a')
    {
        cantidad+=1;
    }
}*/