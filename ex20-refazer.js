//Ao solicitar um valor o programa deve informar a quantidade de notas de cada tipo para chegar aquele valor
//R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
/* 
Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas 
informações sobre as demais cédulas): 
1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. 
*/

//Posso usar um callback aqui?

function withdrawMoney(value) { //Valores disponíveis para o saque, notas definidas como variaveis porque podem assumir valores
    let moneyBill1 = 0
    let moneyBill5 = 0
    let moneyBill10 = 0
    let moneyBill50 = 0
    let moneyBill100 = 0

    let moneyBill = calculeValueBill(value)
    while (value >= moneyBill) {
        switch (moneyBill) {
            case 100:
                value = value - 100
                moneyBill100++
                break;
            case 50:
                value = value - 50
                moneyBill50++
                break;
            case 10:
                value = value - 10
                moneyBill10++
                break;
            case 5:
                value = value - 5
                moneyBill5++
                break;
            case 1:
                value = value - 1
                moneyBill1++
                break;
        }
        moneyBill = calculeValueBill(value)
    }
    return createResult(moneyBill100, moneyBill50, moneyBill10, moneyBill5, moneyBill1)
}

function calculeValueBill(value) {
    
}

console.log(withdrawMoney(254))