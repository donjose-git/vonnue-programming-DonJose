const readline = require('readline-sync');
let arrayval = [];
const arrayElements = () => {
    let arraysize = readline.question("Enter the size of an array: ");
    for (let i = 0; i < arraysize; i++) {
        arrayval[i] = parseInt(readline.question("Enter the " + i + " element: "));
    }
    console.log(arrayval);
}

const indexMultipleOfTwo = () => {
    for (let i = 0; i < arrayval.length; i++) {
        if (i % 2 === 0) {
            console.log("Value of index " + i + " is " + arrayval[i]);
        }
    }
}
arrayElements();
indexMultipleOfTwo();