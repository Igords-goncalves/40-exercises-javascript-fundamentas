// Função com 2 vetores de igual tamanho

// Troque os elementos dos vetores entre si

// Não usar vetor auxiliar

function trocaVetor(vetorA, vetorB) {
    for (let i = 0; i < vetorA.length; i++) {
        if (vetorA != String && vetorB != String) {
            vetorA[i] = vetorB[i] + vetorA[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    }
    console.log(vetorA)
    console.log(vetorB)

}

trocaVetor([1,2,3], [4,5,6])
trocaVetor([1,2,3], [4,5, "a"])

// O sistema gera um bug se o elemento passado for uma string, para isso é necessário algo