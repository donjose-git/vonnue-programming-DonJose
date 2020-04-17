const input = require('readline-sync');
const radius = input.question("Enter the radius: ");

const circleArea = (radius) => { //Find area of a circle
    const pi = 3.14;
    return pi * radius * radius; 
}
console.log("Area of the circle:", circleArea(radius));