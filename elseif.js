function elseifstate(value)
{
    if (value <= 5)
    {
        return "number is less than 5";
    }
    else if (value >= 25){
        return "number is greater than 25";
    }
    else{
        return "in between 5 and 25";
    }
}
console.log(elseifstate(2));