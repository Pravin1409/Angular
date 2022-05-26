class Airthmatic
{
    No1:number;
    No2:number;
    constructor(a:number,b:number)
    {
        this.No1=a;
        this.No2=b;
    }
    Addition()
    {
        var Ans:number=0;
        Ans=this.No1+this.No2;
        return Ans;
    }
    Subtraction()
    {
        var Ans:number=0;
        Ans=this.No1-this.No2;
        return Ans;
    }
    Multiplecation()
    {
        var Ans:number=0;
        Ans=this.No1*this.No2;
        return Ans;
    }
    Division()
    {
        var Ans:number=0;
        Ans=this.No1/this.No2;
        return Ans;
    }
}
var obj=new Airthmatic(10,20);
var ret:number=obj.Addition();
console.log("Addition is:"+ret);

var obj1=new Airthmatic(2,4)
var Ret:number=obj1.Addition();
console.log("Add:"+Ret);

var obj=new Airthmatic(10,20);
var ret:number=obj.Subtraction();
console.log("Subtraction is:"+ret);

var obj=new Airthmatic(5,5);
var ret:number=obj.Multiplecation();
console.log("Multipilcation is:"+ret);

var obj=new Airthmatic(15,3);
var ret:number=obj.Division();
console.log("Division is:"+ret);