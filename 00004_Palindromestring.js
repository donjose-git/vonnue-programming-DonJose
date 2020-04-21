const readline = require('readline-sync');
let stringpalindrome = readline.question("Enter the string: ");

const palindromeString = () => {
    let stringrev = "";
    for (let str = stringpalindrome.length - 1; str >= 0; str--) {
        stringrev += stringpalindrome[str];
    }
    if (stringrev === stringpalindrome) {
        console.log("String is a palindrome");
    }else {
        console.log("String is not a palindrome");
    }
}

palindromeString();