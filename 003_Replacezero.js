const input = require('readline-sync');
const arrayval = input.question("Enter the elements: ");
const replaceArray = ()=>{
    let replace = [];
    for (let i = 0; i < arrayval.length; i++){
        replace.push("0");
    }
    console.log("Replaced array: " + replace);
}
replaceArray();