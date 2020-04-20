const readline = require('readline-sync');
const number = parseInt(readline.question("Enter a number: "));
let sum = 0;
const sumOfNumbers = () => {
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    console.log("Sum of " + number + " numbers: " + sum);   
}
sumOfNumbers();