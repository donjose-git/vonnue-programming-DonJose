const readline = require('readline-sync');
const arrayval = readline.question("Enter the elements: ");
const arr = arrayval.split(',');

const multiplyArrayConstant = (value) => {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i] * value);
    }
}

multiplyArrayConstant(10);