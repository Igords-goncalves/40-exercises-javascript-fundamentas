//// Criar 2 vetor vetorPilha e vetorAdiciona

//// vetorPilha [1,2,3,4,5]

//// vetorAdiciona [6,7,8,9,10]

// Adicionar o vetorAdiciona ao vetorPilha

const vetorPilha = [1,2,3,4,5]
const vetorAdiciona = [6,7,8,9,10]

function manipularVetor(vetor1, vetor2) {

    const vetor = [vetor1, vetor2]
    console.log("Valores adicionados " + vetor2)
    return "Vetor adicionado " + vetor.join(",")

}
console.log(manipularVetor(vetorPilha, vetorAdiciona))

// Não adicionei um vetor dentro do outro apenas os uni