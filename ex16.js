function calculator(number1, number2) {
    let calc = (operator) => {
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
}

console.log(calculator(2, 4))
