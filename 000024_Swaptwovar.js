const input = require('readline-sync');
let number1 = input.question("Enter the first number: ");
let number2 = input.question("Enter the second number: ");
const swapTwo = ()=> {
    number1 == number2;
    number2 == number1;
    console.log("After swapping, first number: " + number2);
    console.log("After swapping, second number: " + number1);
}
swapTwo();