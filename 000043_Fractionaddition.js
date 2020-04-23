const input = require('readline-sync');
const numer1 = parseInt(input.question("Enter first numerator: "));
const denom1 = parseInt(input.question("Enter first denominator: "));
const numer2 = parseInt(input.question("Enter second numerator: "));
const denom2 = parseInt(input.question("Enter second denominator: "));
const number1 = console.log("number1: " + numer1 + "/" + denom1);
const number2 = console.log("number2: " + numer2 + "/" + denom2);

const fractionAddition = (numer1, denom1, numer2, denom2) => {
    return ((numer1 * denom2) + (numer2 * denom1)) / (denom1 * denom2);
}

console.log("Sum of two fraction number: ", fractionAddition(numer1, denom1, numer2, denom2));
