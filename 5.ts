function main():void
{
    var no:number=21;
    Display(no);
}
function Display(value:number)
{
   var a=1;
   var b=1;
   var c=0;
   var i=0;
   for(i=0;i<=value/3;i++)
   {
       console.log(a);
       c=a+b;
       a=b;
       b=c;
   }
}
main();