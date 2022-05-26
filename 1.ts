// Write a ts program which contain one function name as  Maximum.That Function Acccept numbers and return the largest number 

function main():void
{
    var Arr:number[]=[23,89,6,29,56,45,77,32];
    var ret:number=0;
    ret=Maximum(Arr);
    console.log("Maximum number is:"+ret);
}
function Maximum(value:number[])
{
    var i:number=0;
    var max:number=0;
    max=value[0];
    for(i=0;i<8;i++)
    {
        if(value[i]>max)
        {
            max=value[i];
        }
    }
    return max;
}
main();