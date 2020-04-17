const readline = require('readline-sync');
const arrayval = readline.question("Enter the elements: ");
const arr = arrayval.split(',');
const val = 10; 

const multiplyCons = () => {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i] * val);
    }
}
multiplyCons();