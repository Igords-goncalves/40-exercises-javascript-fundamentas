//// Como params altura e txCrescimento

//// existe uma criança menor?

// Em quantos anos a crinaça menor vai ultrapassar a maior?

//// Unidade padrão centimetros

function crescimentoKids(altura1, taxa1, altura2, taxa2) {

    let menorAltura

    if (altura1 < altura2) {
        menorAltura = `A criança com menor altura tem ${altura1}`
    } else if (altura1 > altura2) {
            menorAltura = `A criança com menor altura tem ${altura2}`
        } else {
            menorAltura = 'As alturas das crianças são iguais'
        }
        console.log(menorAltura)

    let txCrescimento1 = altura1 * taxa1
    let txCrescimento2 = altura2 * taxa2

    console.log(`A criança com altura ${altura1} tem a taxa de crescimento ${txCrescimento1}`)
    console.log(`A criança com altura ${altura2} tem a taxa de crescimento ${txCrescimento2}`)

    let crescimentoAnual1 = altura1 + txCrescimento1
    let crescimentoAnual2 = altura2 + txCrescimento2

    console.log(crescimentoAnual1)
    console.log(crescimentoAnual2)
    
    let ano = 0

    while (crescimentoAnual1 < crescimentoAnual2) {
        ano++
        crescimentoAnual1 += txCrescimento1
        console.log(ano)
        console.log(crescimentoAnual1)
    }
}
crescimentoKids(130, 0.3, 140, 0.4)