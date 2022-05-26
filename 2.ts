class Circle
{
    Radius:number;
    PI:number;
    constructor(a:number)
    {
        this.Radius=a;
        this.PI=3.14;
    }
    Area()
    {
        var Result:number=0;
        Result=this.PI*this.Radius*this.Radius;
        return Result;
    }

}
var abc=new Circle(5);
var ret=abc.Area();
console.log("Area of Circle:"+ret);
