// Utilize a estrutura Switch
// Considere que domingo é o dia 1 e sábado é o dia
// Domingo 1 e Sabado dia 7
/*
Vai verifar se o dia é umas das 3 opções
1 - Dia útil
2 - Fim de Semana Sábado / DOmingo
3 - Dia inválido, exemplo: Dia 32
*/

let calendar = function (number = 31) {
    let arrayDays = []
    for (let i = 1; i <= number; i++) {
        arrayDays.push(i)
    }
    return arrayDays
}
console.log(calendar()) //Default
