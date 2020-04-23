const readline = require('readline-sync');
const number = readline.question("Enter a number: ");
let sum = 0;

const sumOfDigits = (number) => {
    while (number != 0) {
        sum = sum + parseInt(number % 10); 
        number = parseInt(number / 10); 
    }
    return sum;
}

console.log("Sum of digits:", sumOfDigits(number));