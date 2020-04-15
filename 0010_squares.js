const readline = require('readline-sync');
const array = readline.question("Enter the elements: ");
const arraval = array.split(',');
const squareArray = ()=>{
    for (let i = 0; i < arraval.length; i++){
        console.log(arraval[i] ** 2);
    }
}
squareArray();