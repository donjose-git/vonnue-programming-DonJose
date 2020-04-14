const readline = require('readline-sync');
let arrayval = [];
arrayval = readline.question("Enter the elements: ");
const readArray = ()=> {
    let sum = 0;
    for (let i = 0; i < arrayval.length; i++)
    {
        sum = sum + parseInt(arrayval[i]);
    }
    console.log("sum of elements of an array:" + sum);
}
readArray();
