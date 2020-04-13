let input = require('readline-sync');
const Leapyear = (year) =>{
    if (year % 4 == 0){
        console.log("It's leap year");
    }
    else{
        console.log("Not a leap year");
    }
}
const leapyear = input.question("Enter a year: ");
Leapyear(leapyear);