function main():void
{
    var no:number=153;
    var bret:number=0;;
    bret=Armstrong(no);
    console.log("Sum is:"+bret);
    if(bret==true)
    {
        console.log("Armstrong number");
    }
    else
    {
        console.log("Not Armstrong number");
    }
}
function Armstrong(no:number)
{
    var Digit:number=0;
    var sum:number=0;
    var temp:number=no;
   
    
     while(temp!=0)
     {
        Digit=temp%10;
         sum=sum+(Digit*Digit*Digit);
         temp=temp/10;
         
     }
     
     
    
    if(sum==no)
    {
        return true;
    }
    else
    {
        return false;
    }
    
 }



main();