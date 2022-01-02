/*12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales*/

let frase = prompt("Ingrese un frase");
let cantidad = 0;
let vocalesCantidad=[0,0,0,0,0];
let vocales= ['A', 'E', 'I', 'O', 'U'];

for(let i = 0 ; i < frase.length; i++)
{
    if(frase[i]=='a')
    {
        vocalesCantidad[0]+=1;
    }
    if(frase[i]=='e')
    {
        vocalesCantidad[1]+=1;
    }
    if(frase[i]=='i')
    {
        vocalesCantidad[2]+=1;
    }
    if(frase[i]=='o')
    {
        vocalesCantidad[3]+=1;
    }
    if(frase[i]=='u')
    {
        vocalesCantidad[4]+=1;
    }
}

for( i=0;i<5;i++)
{
    document.write("Cantidad de vocales letra "+vocales[i]+" : " +vocalesCantidad[i]);
    console.info("Cantidad de vocales letra "+vocales[i]+" : " +vocalesCantidad[i]);

}
/*
if(cantidad>0)
{
    document.write("Cantidad de vocales encontradas: "+cantidad);
    console.info("Cantidad de vocales encontradas: "+cantidad);
}else{
    document.write("No se encontraron vocales");
    console.error("No se encontraron vocales");
}*/
