//// 2 funções com 2 parâmetros

//// um paramentro vetorNumeros com valores numéricos

//// outro parametro vetorinteiro com um numero inteiro

//// A primeira função retorna outro vetor com resultado da mutiplicação de cada elemento pelo Inteiro

//// Se o valor do elemento for maior que 5 a segunda função fará o mesmo

function primeiraMultiplicacao(vetorNumeros, inteiro) {
    for (let i = 0; i < vetorNumeros.length; i++) {
        console.log(vetorNumeros[i] * inteiro)
    }
}

function segundaMultiplicacao(vetorNumeros, inteiro) {
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] > 5) {
            console.log(vetorNumeros[i] * inteiro)
        }
    }
}

primeiraMultiplicacao([2,3,4,6,8], 2)
segundaMultiplicacao([1,3,2,3,5,6,7], 2)
segundaMultiplicacao([1,3,2,3], 2)