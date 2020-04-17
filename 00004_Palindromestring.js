const readline = require('readline-sync');
const stringpal = readline.question("Enter the string: ");

const palindromeString = () => {
    let stringrev = "";
    for (let str = stringpal.length - 1; str >= 0; str--) {
        stringrev += stringpal[str];
    }
    if (stringrev === stringpal) {
        console.log("String is a palindrome");
    }
    else {
        console.log("String is not a palindrome");
    }
}
palindromeString();