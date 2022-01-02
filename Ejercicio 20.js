/*20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión*/

let cadena=prompt("Ingrese algo");
let cadena2="";

while(cadena!=undefined)
{
    cadena2=cadena2+cadena;
    //console.log(cadena2);
    cadena=prompt("Ingrese algo");
    if(cadena==undefined)
    {
        break;
    }
    cadena2=cadena2+"-";
}

console.log(cadena2);