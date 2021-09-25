//// Como params altura e txCrescimento

//// existe uma criança menor?

// Em quantos anos a crinaça menor vai ultrapassar a maior?

// Uidade padrão centimetros

function indiceDeALtura(altura1, txCrescimento1, altura2, txCrescimento2) {

    let kid1 = altura1
    let kid2 = altura2

    let kidMenor = 0

    if (kid1  > kid2) {
        kidMenor = altura2
        console.log(`A crinça menor tem ${kidMenor}cm`)
    } else 
        if (kid1 < kid2) {
            kidMenor = altura1
            console.log(`A crinça menor tem ${kidMenor}cm`)
        } else {
            console.log('As alturas das crianças são iguais')
        }

// txCrescimento ---> a cada 1 ano a criança cresce x centimetros

        let ano = 0

        if (kid1 + txCrescimento1 < kid2) {
            ano++
        }else if(kid2 + txCrescimento2 < kid1) {
            ano++
        }
}
indiceDeALtura(130, 5, 110, 30)