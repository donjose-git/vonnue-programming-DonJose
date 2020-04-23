const input = require('readline-sync');
const number = parseInt(input.question("Enter a number: "));
let sum = 0;

const sumOfNumbers = (number) => {
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log("sum of " + number + " numbers:", sumOfNumbers(number));