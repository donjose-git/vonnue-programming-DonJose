const greatestOfThree = (number1, number2, number3) => {
    if (number1 > number2 && number1 > number3) {
        return "number1 is greater";
    }
    else if (number2 > number3) {
        return "number2 is greater";
    }
    else {
        return "number3 is greater"
    }
}
console.log(greatestOfThree(33, 44, 55));