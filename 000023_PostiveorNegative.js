const readline = require('readline-sync');
const Postivenegative = (number) =>{
    if (number >= 0){ //Checking postive or not
        console.log(number + " " + "is a positive number");
    }
    else {
        console.log(number + " " + "is a negative number");
    }
}
const numbercheck = readline.question("Enter a number: ");
Postivenegative(numbercheck);