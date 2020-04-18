const readline = require('readline-sync');
let arrval = [];
const arrayElements = () => {
    let arraysize = readline.question("Enter the size of an array: ");
    for (let i = 0; i < arraysize; i++) {
        arrval[i] = parseInt(readline.question("Enter the " + i + " element: "));
    }
    console.log(arrval);
}

const squareOfArray = () => {
    for (let i = 0; i < arrval.length; i++) {
        console.log(arrval[i] * arrval[i]);
    }
}
arrayElements();
squareOfArray();