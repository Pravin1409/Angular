function main():void
{
    var no1:number=20;
    Display(no1);
}
function Display(value1:number)
{
    var i:number=0;
    for(i=1;i<=value1/2;i++)
    {
        if(value1%i==0)
        {
            console.log("the number are:" +i);
        }
    }
}
main();