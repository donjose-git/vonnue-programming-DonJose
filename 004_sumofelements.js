const readline = require('readline-sync');
let arrayval = [];
const arrayElements = () => {
    let arraysize = readline.question("Enter the size of an array: ");
    for (let i = 0; i < arraysize; i++) {
        arrayval[i] = parseInt(readline.question("Enter the " + i + " element: "));
    }
    console.log(arrayval);
}

const sumOfElementsArray = () => {
    let sum = 0;
    for (let i = 0; i < arrayval.length; i++) {
        sum = sum + parseInt(arrayval[i]);
    }
    return sum;
}
arrayElements();
console.log("sum of elements of an array: ", sumOfElementsArray());
