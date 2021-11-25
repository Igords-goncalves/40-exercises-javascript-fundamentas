//// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble

// utilize a função de união concat() de duas maneiras diferentes para unir os vetores

// Os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [23, 45, 18, 9]

const vetorString = ["Ana", "Pedro", "Jonny", "Alíce"]

const vetorDouble = [6.8, 3.4, 7.6, 9.7]

function concatenacao() {
    let vetorResultado = [vetorString.concat(vetorInteiro).concat(vetorDouble)]
    for (let i = 0; i < vetorResultado.length; i++) {
        console.log(vetorResultado[i])
    }
}
concatenacao()

/*
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))
*/