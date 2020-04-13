const input = require('readline-sync');
const radius = input.question("Enter the radius: ");
const circleArea = (radius) => { //Find area of a circle
    const pi = 3.14;
    const area = pi * radius * radius; 
    console.log("Area of the circle: " + area);
}
circleArea(radius);