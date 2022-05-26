function main():void
{
    var no:number=11;
    var bret:boolean;
    bret=CheckPrime(no);
    if(bret==true)
    {
        console.log("Number is Prime");
    }
    else
    {
        console.log("Number is not Prime");
    }
    
}
function CheckPrime(value:number)
{
    if(value%2!=0)
    {
        return true;
    }
    else
    {
        return false;
    }

}
main();