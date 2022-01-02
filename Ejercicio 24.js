/*25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
123
4 (Múltiplo de 4)
5
————————————————————
67
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10*/

let a=0;

for(let i = 1; i < 500; i++)
{
    if((i%4==0)&&(i%9==0))
    {
        console.log(i+" (Múltiplo de 4 y 9)"+"\n");
    }else if(i%4==0)
    {
        console.log(i+" (Múltiplo de 4)"+"\n");
    }else if(i%9==0){
        console.log(i+" (Múltiplo de 9)"+"\n");
    }else{
        console.log(i+"\n")
    }
    
    a+=1;
    if(a==5)
    {
        console.log("-".repeat(20));
        a=0;
    }

}

