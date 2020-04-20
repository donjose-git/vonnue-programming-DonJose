const greatestTwo = (number1, number2) => {

    if (number1 > number2) {
        return "number1 is greater";
    }else if (number2 > number1) {
        return "number2 is greater";
    }else {
        return "Both are equal"
    }
}

console.log(greatestTwo(10, 15));