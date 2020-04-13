const readlinesync = require('readline-sync');
const num1 = parseInt(readlinesync.question("Enter the first number: "));
const num2 = parseInt(readlinesync.question("Enter the second number: "));

const ArithmeticAdd = (num1, num2)=> { //Addition
    const sum = num1 + num2;
    console.log("sum is " + sum);
}

const ArithmeticSub = (num1, num2)=> { //subtraction
    const difference = num1 - num2;
    console.log("difference is " + difference);
}

const ArithmeticProduct = (num1, num2)=> { //multiplication
    var product = num1 * num2;
    console.log("product is " + product); 
}

const ArithmeticQuotient = (num1, num2) => { //division
    var quotient = num1 / num2;
    console.log("quotient is " + quotient);
}

const ArithmeticModulus = (num1, num2) => { //modulus
    var modulus = num1 % num2;
    console.log("modulus is " + modulus);
}

const ArithmeticLess = (num1, num2) => { //checking less number
    if (num1 < num2)
    {
        console.log("Num1 is less than num12");
    }
}

const ArithmeticGreater = (num1, num2) => { //checking greater number
    if (num1 > num2)
    {
        console.log("num1 is greater than num2");
    }
}

function ArithmeticEqual(num1, num2) { //checking equal or not
    if (num1 == num2)
    {
        console.log("Numbers are equal");
    }
}
ArithmeticAdd(num1, num2);
ArithmeticSub(num1, num2);
ArithmeticProduct(num1, num2);
ArithmeticQuotient(num1, num2);
ArithmeticModulus(num1, num2);
ArithmeticLess(num1, num2);
ArithmeticGreater(num1, num2);
ArithmeticEqual(num1, num2);