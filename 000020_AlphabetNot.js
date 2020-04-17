const readline = require('readline-sync');
const alphabetNot = (alphabet) => {
    if (( alphabet >= 'a' && alphabet <= 'z') || (alphabet >= 'A' && alphabet <= 'Z')){
        console.log("It's an alphabet");
    }
    else if (alphabet >= '!' && alphabet <= '*'){
        console.log("It's a special character");
    }
    else{
        console.log("It's a number");
    }
}
const readval = readline.question("Enter the character: ");
alphabetNot(readval);
