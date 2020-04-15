//const arrayval = [1, 2, 3, 4, 5, 6, 7, 8];
const readline = require('readline-sync');
const arrayval = readline.question("Enter the elements: ");
const IndexArray = () => {
    for (let i = 0; i < arrayval.length; i++){
        if (i % 2 == 0)
        {
            console.log("Value of index " + i + " is " + arrayval[i]);
        }
    }
}
IndexArray();