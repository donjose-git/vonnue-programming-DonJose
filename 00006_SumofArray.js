const readline = require('readline-sync');
const array = readline.question("Enter the elements: ");
const arraysize = array.split(',');
let sum = 0;
const sumofArray = () => {
        for (let i = 0; i < arraysize.length; i++){
            sum = sum + parseInt(arraysize[i]);
        }   
        console.log("Array sum: " + sum);
}
sumofArray();