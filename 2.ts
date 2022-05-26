function main():void
{
    var radius:number=5;
    var pi:number=3.14;
    var ret:number=0;
    ret=Area(radius,pi);
    console.log("Area of circle: "+ret);
}
function Area(value1:number,value2:number)
{
    var result:number=0;
    result=value2*value1*value1;
    return result;
}
main();