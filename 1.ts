function main():void
{
    var no1:number=89;
    var no2:number=29;
    var no3:number=101;
    var ret:number=0;
    ret=Maximum(no1,no2,no3);
    console.log("Maximum number is:"+ret);
}
function Maximum(value1:number,value2:number,value3:number)
{
    if(value1>=value2 && value1>=value3)
    {
        return value1;
    }
    else if(value2>=value1&&value2>=value3)
    {
        return value2;
    }
    else
    {
        return value3;
    }
   
}
main();