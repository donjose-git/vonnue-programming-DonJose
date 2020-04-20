const readline = require('readline-sync');
const number = readline.question("Enter a number: ");
let sum = 0;

const sumOfMultiplesOfThreeOrFive = () => {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum of multiples of 3 or 5: " + sum);
}
sumOfMultiplesOfThreeOrFive();