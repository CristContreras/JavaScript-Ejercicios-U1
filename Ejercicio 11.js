/*11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales*/

let frase = prompt("Ingrese un frase");
let cantidad = 0;
for(let i = 0 ; i < frase.length; i++)
{
    if(frase[i]=='a'||frase[i]=='e'||frase[i]=='i'||frase[i]=='o'||frase[i]=='u')
    {
        cantidad+=1;
    }
}

if(cantidad>0)
{
    document.write("Cantidad de vocales encontradas: "+cantidad);
    console.info("Cantidad de vocales encontradas: "+cantidad);
}else{
    document.write("No se encontraron vocales");
    console.error("No se encontraron vocales");
}
