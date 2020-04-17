const readlinesync = require('readline-sync');
const num1 = parseInt(readlinesync.question("Enter the first number: "));
const num2 = parseInt(readlinesync.question("Enter the second number: "));

const arithmeticAdd = (num1, num2) => { //Addition
    return num1 + num2;
}

const arithmeticSub = (num1, num2) => { //subtraction
    return num1 - num2;
}

const arithmeticProduct = (num1, num2) => { //multiplication
    return num1 * num2;
}

const arithmeticQuotient = (num1, num2) => { //division
    return num1 / num2;
}

const arithmeticModulus = (num1, num2) => { //modulus
    return num1 % num2;
}

const arithmeticLess = (num1, num2) => { //checking less number
    if (num1 < num2)
    {
        console.log("num1 is less than num2");
    }
}

const arithmeticGreater = (num1, num2) => { //checking greater number
    if (num1 > num2)
    {
        console.log("num1 is greater than num2");
    }
}

const arithmeticEqual = (num1, num2) => { //checking equal or not
    if (num1 === num2)
    {
        console.log("Numbers are equal");
    }
}
console.log("Sum is", arithmeticAdd(num1, num2));
console.log("Difference is", arithmeticSub(num1, num2));
console.log("Product is", arithmeticProduct(num1, num2));
console.log("Quotient is:", arithmeticQuotient(num1, num2));
console.log("Modulus is", arithmeticModulus(num1, num2));
arithmeticLess(num1, num2);
arithmeticGreater(num1, num2);
arithmeticEqual(num1, num2);