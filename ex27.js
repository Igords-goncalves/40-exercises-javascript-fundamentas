//// Como params altura e txCrescimento

//// existe uma criança menor?

// Em quantos anos a crinaça menor vai ultrapassar a maior?

// Uidade padrão centimetros

function indiceDeALtura(altura1, txCrescimento1, altura2, txCrescimento2) {
    let kidMenor = 0
    let kidMaior = 0
    if (altura1 > altura2) {
        kidMenor = altura2
        kidMaior = altura1
        console.log(`A crinça menor tem ${kidMenor}cm`)
    } else if (altura1 < altura2) {
        kidMenor = altura1
        kidMaior = altura2
        console.log(`A crinça menor tem ${kidMenor}cm`)
    } else {
        console.log('As alturas das crianças são iguais')
    }

//txCrescimento ---> a cada 1 ano a criança cresce x centimetros

    const calculoDeCrescimento = function () {

       let diferencaDeCrescimento = kidMaior - kidMenor
       console.log(diferencaDeCrescimento) //Teste
       
       if (diferencaDeCrescimento > txCrescimento1) {
          let resultado = diferencaDeCrescimento - txCrescimento1
          console.log(resultado)
       } else if (diferencaDeCrescimento > txCrescimento2) {
           let resultado = diferencaDeCrescimento - txCrescimento2
           console.log(resultado)
       }
    }
    return calculoDeCrescimento()
}
indiceDeALtura(130, 5, 110, 30)