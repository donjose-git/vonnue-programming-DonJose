const input = require('readline-sync');
let arrayelem = [];
arrayelem = input.question("Enter the elements: ");
console.log("The array is: " + arrayelem);
const squaresArray = ()=>{
    let square = [];
    for (let i = 0; i < arrayelem.length; i++){
        square.push(arrayelem[i] * arrayelem[i]);
    }
    console.log("Squares of the elements: " + square);
}
squaresArray();