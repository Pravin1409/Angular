class Circle
{
    Radius:number;
    PI:number;
    constructor(a:number)
    {
        this.Radius=a;
        this.PI=3.14;
    }
}
class CircleX extends Circle
{
    Circumferance(Circle)
    {
        var Result:number=0;
        Result=2*this.PI*this.Radius;
        return Result;
    }
}
var a=new  CircleX(3);
var ret=a.Circumferance(3);
console.log("Circumference is:"+ret);


