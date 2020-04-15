const readline = require('readline-sync');
let arrayval = [];
arrayval = readline.question("Enter the elements: ");
const readArray = ()=> {
    for (let i = 0; i < arrayval.length; i++){
        console.log(arrayval[i]);
    }
}
readArray(arrayval);