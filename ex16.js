function calculator(number1, operator, number2) {
    switch (operator) {
        case "+":
            return number1 + number2
        case "-":
            return number1 - number2
        case "*":
            return number1 - number2
        case "/":
            return number1 - number2
        default:
            return number1 + number2
    }
}

console.log(calculator(2, "+", 4))
