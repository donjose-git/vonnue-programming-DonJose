const readline = require('readline-sync');
const UppercaseLower = (character)=> {
    if ( character >= 'A' && character <= 'Z') { //Checking Uppercase
        console.log("The character is a  Uppercase")
    }
        if (character >= 'a' && character <= 'z'){ //Checking Lowercase
        console.log("The character is lower case")
    }
   else if(character >= '!' && character <= '*'){ //Checking Special character
        console.log("It's a special character")
    }
}
const character = readline.question("Enter the character: ");
UppercaseLower(character);