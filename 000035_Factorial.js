const readline = require('readline-sync');
const number = parseInt(readline.question("Enter a number: "));
let factorial = 1;

const factorialOfNumber = (number) => {
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

console.log("" + number + "!" + " =", factorialOfNumber(number));