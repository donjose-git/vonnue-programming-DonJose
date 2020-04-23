const input =require('readline-sync');
const number = parseInt(input.question("Enter a number: "));
let reverse = 0;
let reminder;

const reverseOfNumber = (number) => {
    while (number !== 0) {
        reminder = number % 10;
        reverse = reverse * 10 + reminder;
        number = parseInt(number / 10);

    }
    return reverse;
}

console.log("Reversed number: ", reverseOfNumber(number));