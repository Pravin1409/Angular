//write ts program which contain one function name as maximum.That function aceept array of number and return second largest number
function main():void
{
    var Arr:number[]=[23,89,6,29,56,45,77,32];
    var ret:number=0;
    ret=Max(Arr,8);
    console.log("The second maximum number is:"+ret);
}
function Max(ptr:number[],size:number)
{
    var i:number=0;
    var max1:number=0;
    var max2:number=0;

    for(i=0;i<size;i++)
    {
        if(ptr[i]>max1)
        {
            max2=max1;
            max1=ptr[i];
            
        }
        else if(ptr[i]>max2 && ptr[i]<max1)
        {
            max2=ptr[i];
        }
       

    }
    return max2;
}
main();