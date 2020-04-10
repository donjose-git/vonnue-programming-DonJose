function switchexample(val)
{
    var result = "";
    switch(val)
    {
        case "bob": 
        result = "Marley";
        break;
        case 2:
        result = "beta";
        break;
        case 3: 
        result = "gama";
        break;
        case 4:
        result = "delta";
        break;
    }
   return result;
}
console.log(switchexample("bob"));