// Association year plan
// Obrigatóriamente deve ser pago no mês de janeiro
// Após o mês de janeiro é cobrado 5% no regime de juros compostos ou seja , 10, 15 ...
// Qual valor pagarei no mês escolhido

function associationYearPlan(month, value = 150) {
    switch (month) {
        case 1: //January
            return `The value is U$${value}`
            break;
        case 2: //Feburary 
            let feb = console.log(`The value is U$${(value * 0.05) + value}`)
            return feb
            break;
        case 3:
            let mar = console.log(`The value is U$${(feb * 0.05) + feb}`)
            return mar
            break;
        default:
            break;
    }
}

console.log(associationYearPlan(3))