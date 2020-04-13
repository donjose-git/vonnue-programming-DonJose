const readlinesync = require('readline-sync')
const number = readlinesync.question("Enter a number: ");
const numberOdd = (number) => {
    if ( number % 2 != 0 ) //Checking odd or even
    {
        console.log("the number is odd")
    }
    else
    {
        console.log("number is even");
    }  
}
numberOdd(number);