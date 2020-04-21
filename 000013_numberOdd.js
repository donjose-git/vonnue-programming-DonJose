const readline = require('readline-sync');
let number = parseInt(readline.question("Enter a number: "));

const numberOddEven = (number) => {
    if (number % 2 === 0 ) { //Checking odd or even
        console.log("The number is even");
    }else {
        console.log("The number is odd");
    }  
}

numberOddEven(number);