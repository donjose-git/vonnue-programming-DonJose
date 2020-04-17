let input = require('readline-sync');
const leapyear = input.question("Enter a year: ");
const leapYear = (year) => {
    if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)){
        console.log("It's leap year");
    }
    else{
        console.log("Not a leap year");
    }
}
leapYear(leapyear);