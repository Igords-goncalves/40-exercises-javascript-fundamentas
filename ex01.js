//My solution --> Using a method Function Factory

function calculate(a, b) {
   return {
        sum: a + b,
        subtract: a - b,
        multiply: a * b,
        divided: a / b
   }
}
console.log(calculate(2, 4))
console.log(calculate(3, 9))

//Teacher Solution --> Using Params Variables 

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)
