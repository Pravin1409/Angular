function main():void
{
    var str:string='Pune kothrud Marvellous infosys';
    var bret:boolean;
    bret=Cheack(str);
    if(bret==true)
    {
        console.log("String is their");
    }
    else
    {
        console.log("String not Found");
    }
    
}
function Cheack(value:string)
{
    if(value ==" Marvellous")
    {
        return true;
    }
    else
    {
        return false;
    }
}
main();