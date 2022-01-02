/*22. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
22
333
4444
55555
666666*/

let rep = 0;

for(let i = 0; i<31;i++)
{
    console.log(String(i).repeat(rep));
    rep+=1;
}

