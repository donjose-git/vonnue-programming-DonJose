var globalfun = 10;
function fun1()
{
    globalfun1 = 5;
}
function fun2()
{
    var output = "";
    if (typeof globalfun != "undefined")
    {
        output += "Output= " + globalfun;
    }
    if (typeof globalfun1 != "undefined")
    {
        output += "Output: " + globalfun1;
    }
    console.log(output);
}
fun1();
fun2();