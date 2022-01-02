/*19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente*/

let nota = prompt("Ingrese la nota");

if(Number(nota)==nota)
{
    if(nota>0&&nota<=10)
    {
        if(nota>0&&nota<=3)
        {
            console.log("Muy deficiente");
        }
        if(nota>3&&nota<=5)
        {
            console.log("Insuficiente");
        }
        if(nota>5&&nota<=6)
        {
            console.log("Suficiente");
        }
        if(nota>6&&nota<=7)
        {
            console.log("Bien");
        }
        if(nota>7&&nota<=9)
        {
            console.log("Notable");
        }
        if(nota>9&&nota<=10)
        {
            console.log("Sobresaliente");
        }
    }else{
        console.log("El numero debe estar entre 1 y 10");
    }
   
}else{
    console.error("Debe ingresar un numero");
}





