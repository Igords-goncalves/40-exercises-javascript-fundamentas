// Utilize a estrutura Switch
// Considere que domingo é o dia 1 e sábado é o dia
// Domingo 1 e Sabado dia 7
/*
Vai verifar se o dia é umas das 3 opções
1 - Dia útil
2 - Fim de Semana Sábado / Domingo
3 - Dia inválido, exemplo: Dia 32
*/

function calendar (number) {
    /*let arrayDays = []
    for (let i = 1; i <= number; i++) {
        arrayDays.push(i)
    }*/
    switch (number) {
        case 1:
            console.log('Weekend')
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Week day')
            break;
        case 7:
            console.log('Weekend')
            break;
        default:
            console.log('Its not a number')
            break;
    }
    return number
}
calendar(4)

/*
function dayVerifier (date) {
    date = calendar()
    for (let index = 0; index <= date.length; index = index + 7) { //0, 6, 7, 13, 14, 20, 21, 27, 28
        const weekEnd = date[index];
        switch (weekEnd) {
            case 1:
                console.log('Weekends ' + weekEnd)
            default:
                break;
        }
    }
}
dayVerifier()

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
*/