const readline = require('readline-sync');
let array = [];
array = readline.question("Enter the elements of array: ");
const reverseArray = ()=> {
    let reverse = [];
    for (let i = array.length - 1; i >= 0; i--){
        reverse += array[i];
    }
    console.log("Reversed Array: " + reverse);
}
reverseArray();