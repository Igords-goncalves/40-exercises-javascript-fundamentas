// Association year plan
// Obrigatóriamente deve ser pago no mês de janeiro
// Após o mês de janeiro é cobrado 5% no regime de juros compostos ou seja , 10, 15 ...
// Qual valor pagarei no mês escolhido

function associationYearPlan(month, value = 150) {
    if(month > 0 && month < 13) {
        tax = 5/100
        late = month - 1
        return (value * ((1 + tax)**late)).toFixed(2)
    } else {
        return 'Ivalid month'
    }
}

console.log(associationYearPlan(8))