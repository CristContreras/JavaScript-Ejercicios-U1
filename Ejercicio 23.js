/*24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1*/

let rep = 0;

for(let i = 7; i > 0; i--)
{
    console.log(String(i).repeat(rep));
    rep+=1;
}

