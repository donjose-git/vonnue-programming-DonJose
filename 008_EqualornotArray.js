const readline = require('readline-sync');
let arrval = [];
const arrayElements = () => {
    let arraysize = readline.question("Enter the size of an array: ");
    for (let i = 0; i < arraysize; i++) {
        arrval[i] = parseInt(readline.question("Enter the " + i + " element: "));
    }
    console.log(arrval);
}

const currentNextItemEqual = () => {
    for (let i = 0; i < arrval.length; i++) {
        if (arrval[i] === arrval[i+1]) {
            console.log("Equal elements are in the array: " + arrval[i] + " " + arrval[i+1]);
        }
    }
}
arrayElements();
currentNextItemEqual();