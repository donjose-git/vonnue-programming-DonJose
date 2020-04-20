const readline = require('readline-sync');
let arrval = [];
const arrayElements = () => {
    let arraysize = readline.question("Enter the size of an array: ");
    for (let i = 0; i < arraysize; i++) {
        arrval[i] = parseInt(readline.question("Enter the " + i + " element: "));
    }
    console.log(arrval);
}

const reverseArray = ()=> {
    let reverse = [];
    for (let i = arrval.length - 1; i >= 0; i--) {
        reverse += arrval[i];
    }
    console.log("Reversed Array: " + reverse);
}
arrayElements();
reverseArray();