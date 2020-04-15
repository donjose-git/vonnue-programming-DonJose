//const arrval = [35, 23, 10, 50, 6, 9, 30];
const readline = require('readline-sync');
let arrelem = readline.question("Enter the values: ");
let arrval = arrelem.split(',');
let arrfive = [];
let arrthree = [];
let arrthreefive = [];
const MultipleArray = ()=>{
    for (let i = 0; i < arrval.length; i++){
        if (arrval[i] % 3 == 0){
            arrthree += arrval[i];
        }
        if (arrval[i] % 5 == 0){
            arrfive += arrval[i];
        }
        if (arrval[i] % 3 == 0 && arrval[i] % 5 == 0){
            arrthreefive += arrval[i];
        }
    }
    console.log("multiples of 3: " + arrthree);
    console.log("multiples of 5: " + arrfive);
    console.log("Multiples of 3 and 5: " + arrthreefive);
}
MultipleArray();