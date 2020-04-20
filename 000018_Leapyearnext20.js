const input = require('readline-sync');
const leapyear20 = (year) => {
    let i = 20;
    while (i >= 0){
        if (year % 4 === 0){
            console.log(year);
            year++;
            i--; 
        }else {
            year++;
        }
    }
}
let year = input.question("Enter the current leap year: ");
leapyear20(year);
