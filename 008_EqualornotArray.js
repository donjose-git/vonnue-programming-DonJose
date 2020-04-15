const input = require('readline-sync');
let arrayvalue = [];
arrayvalue = input.question("Enter the elements: ");
const equalArray = ()=> {
    for (let i = 0; i < arrayvalue.length - 1; i++)
    {
        if ( arrayvalue[i] == arrayvalue[i+1])
        {
            console.log("Equal elements are in the array: " + arrayvalue[i] + " " + arrayvalue[i+1]);
        }
    }
}
equalArray();