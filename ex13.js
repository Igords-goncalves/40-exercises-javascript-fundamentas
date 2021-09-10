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
//console.log(calendar())

function dayVerifier () {
    let date = calendar()
    console.log(date)
    for (let index = 0; index <= date.length; index = index + 7) { //0, 6, 7, 13, 14, 20, 21, 27, 28
        const sunday = date[index];
        const saturday = 0
            const weekEnd = saturday + ", " + sunday
            console.log("These are the weekends = " + weekEnd)
    }
}
dayVerifier()