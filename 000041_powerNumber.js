const input =require('readline-sync');
const number = parseInt(input.question("Enter a number: "));
let expon = parseInt(input.question("Enter an exponent: "));
let power = 1;

const powerOfNumber = (number) => {
    while (expon != 0) {
        power *= number;
        expon--;
    }
    return power;
}

console.log("Power of number: ", powerOfNumber(number));