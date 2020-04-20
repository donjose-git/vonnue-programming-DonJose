const readline = require('readline-sync');
const character = readline.question("Enter a character: ");

const asciiValues = (character) => {
    console.log(character.charCodeAt(0));
}

asciiValues(character);