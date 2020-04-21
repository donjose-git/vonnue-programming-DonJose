const readlinesync = require('readline-sync')
let number = parseInt(readlinesync.question("Enter a number: "));
const numberOdd = (number) => {
    if (number % 2 === 0 ) { //Checking odd or even
        console.log("The number is even")
    }else {
        console.log("The number is odd");
    }  
}
numberOdd(number);