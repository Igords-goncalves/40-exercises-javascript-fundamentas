// Função recebe um vetor de notas

// 0.0 a 4.9 -> conceito D

// 5.0 a 6.9 -> Conceito C

// 7.0 a 8.9 -> Conceito D

// 9.0 a 10.0 -> Conceito A

function conceitoDeNotas(vetorNotas) {
    for (const notas in vetorNotas) {
        if (vetorNotas[notas] < 4.9) {
            console.log(`A nota de valor ${vetorNotas[notas]} tem conceito D`)
        } else if (vetorNotas[notas] > 5.0 && vetorNotas[notas] < 6.9) {
            console.log(`A nota de valor ${vetorNotas[notas]} tem conceito C`)
        } else if (vetorNotas[notas] > 7.0 && vetorNotas[notas] < 8.9) {
            console.log(`A nota de valor ${vetorNotas[notas]} tem conceito B`)
        }  else if (vetorNotas[notas] > 9.0) {
            console.log(`A nota de valor ${vetorNotas[notas]} tem conceito A`)
        }
    }
}

conceitoDeNotas([8, 9.1, 3.4, 10, 1.1, 7.5, 5.5])

// O professor decidiu usar o metodo push para mostrar um vetor que contenha os conceitos