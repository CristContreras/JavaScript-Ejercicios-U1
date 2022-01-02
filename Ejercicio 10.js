/*10. Escribe un programa que pida una frase y escriba las vocales que aparecen*/

let frase = prompt("Ingrese un frase");
let encontrado=false
for(let i =0;i<frase.length;i++)
{
    if(frase[i]=='a'||frase[i]=='e'||frase[i]=='i'||frase[i]=='o'||frase[i]=='u')
    {
        encontrado=true;
        console.info("Vocales: "+frase[i]);
    }
}

if(encontrado!=true)
{
    console.error("No se encontraron vocales");
}