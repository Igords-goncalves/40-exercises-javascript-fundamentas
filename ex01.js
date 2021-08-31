//Using a method Function Factory

function calcular(a, b) {
   return {
        soma: a + b,
        sub: a - b,
        mult: a * b,
        div: a / b
   }
}

console.log(calcular(2, 4))
console.log(calcular(3, 9))

