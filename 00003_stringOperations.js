const readline = require('readline-sync');
let str1 = readline.question("Enter string1: ");
let str2 = readline.question("Enter string2: ");

const stringConcat = (str1, str2) => { //Concatination
    return str1 + " " + str2;
}

const stringReverse = (str1) => { //String reverse
    let stringrev = "";
    for (let i = str1.length - 1; i >= 0; i--){   
        stringrev += str1[i];
    }
    return stringrev;
}

const reversedConcatination = (str1, str2) => { //Reversed concatination
    const concat = str1 + str2;
    var concatrevstring = "";
    for (let i = concat.length - 1; i >= 0; i--) {
        concatrevstring += concat[i];
    }
    return concatrevstring;
}
const splitString = (str1) => { //String splitting
    const result = str1.split("");
    return result;
}

console.log("Concatinated string:", stringConcat(str1, str2));
console.log("Reversed string: ", stringReverse(str1));
console.log("Reversed concatination:", reversedConcatination(str1, str2));
console.log("Splitted string:", splitString(str1));