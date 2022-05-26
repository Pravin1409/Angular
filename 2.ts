//Write ts program which contain one function name as summation .The function Accept array of number are return addtion of array

function main():void
{
    var Arr:number[]=[23,6,7,4,5,7];
    var ret:number=0;
    ret=Summation(Arr,6);
    console.log("Addition of numbers is:"+ret);
}
function Summation(value:number[],size:number)
{
    var i:number=0;
    var sum:number=0;
    for(i=0;i<size;i++)
    {
        sum=sum+value[i];
    }
    return sum;
}
main();