const input = require('readline-sync');
let number1 = parseInt(input.question("Enter the first number: "));
let number2 = parseInt(input.question("Enter the second number: "));

const swapTwoNumbers = () => {
    number1 = number1 + number2;
    number2 = number1 - number2;
    number1 = number1 - number2;
    return [number1, number2];  
}
console.log("Numbers after swap:", swapTwoNumbers());