//My way --> Using a standad parameter

function simpleNumber (a = 0.30000000000000004) {
    return 'R$'+a.toFixed(2)
}

console.log(simpleNumber())

//Teacher way --> I don't pay attention to the question 
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)