const readline = require('readline-sync');
const str1 = readline.question("Enter string1: ");
const str2 = readline.question("Enter string2: ");
const stringConcat = (str1, str2) => { //Concatination
    console.log("Concatinated string: ", str1 + " " + str2);
}

const stringReverse = (str1) => { //String reverse
    let stringrev = "";
    for (let i = str1.length - 1; i >= 0; i--)
    {   
        stringrev += str1[i];
    }
    console.log("Reversed string: " + stringrev);
}

const reverseconcat = (str1, str2) => { //Reversed concatination
    const concat = str1 + str2;
    var concatrevstring = "";
    for (var i = concat.length - 1; i >= 0; i--)
    {
        concatrevstring += concat[i];
    }
    console.log("Reversed Concatination:" + concatrevstring);
}
const splitString = (str1) => { //String splitting
    const result = str1.split("");
    console.log("Splitted string: " + result);
}
stringConcat(str1, str2);
stringReverse(str1);
reverseconcat(str1, str2);
splitString(str1);