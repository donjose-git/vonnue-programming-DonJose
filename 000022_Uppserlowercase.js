const readline = require('readline-sync');
const upperCase = (character) => {
    if ( character >= 'A' && character <= 'Z') { //Checking Uppercase
        console.log("The character is a  Uppercase")
    }
}

const lowerCase = (character) => {
    if (character >= 'a' && character <= 'z'){ //Checking Lowercase
        console.log("The character is lower case")
    }
}

const specialChar = (character) => {
    if(character >= '!' && character <= '*'){ //Checking Special character
        console.log("It's a special character")
    }
}
const character = readline.question("Enter the character: ");
upperCase(character);
lowerCase(character);
specialChar(character);