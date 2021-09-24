// Calcule o fatorial
// n! = n . (n – 1). (n – 2). (n – 3)
// Ex. 2! = 2 . 1 = 2

function factorial(n) {
    value = n
    while (value > 1) {
        value --
        n = n * value
    }
    console.log(n)
}

factorial(10)
factorial(2)