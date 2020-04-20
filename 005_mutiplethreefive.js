const readline = require('readline-sync');
let arrval = [];
const arrayElements = () => {
    let arraysize = readline.question("Enter the size of an array: ");
    for (let i = 0; i < arraysize; i++) {
        arrval[i] = parseInt(readline.question("Enter the " + i + " element: "));
    }
    console.log(arrval);
}

const multipleOfThreeFive = () => {
    for (i = 0; i < arrval.length; i++) {
        if (arrval[i] % 3 === 0 && arrval[i] % 5 === 0) {
            console.log("Multiples of 3 & 5: " + arrval[i]);
        }
        else {
            console.log("Not multiplied by 3 & 5: " + arrval[i]);
        }
    }
}
arrayElements();
multipleOfThreeFive();