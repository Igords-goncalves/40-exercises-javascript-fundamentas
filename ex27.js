//// Como params altura e txCrescimento

//// existe uma criança menor?

//// Em quantos anos a crinaça menor vai ultrapassar a maior?

//// Unidade padrão centimetros

function crescimentoKids(altura1, taxa1, altura2, taxa2) {

    let menorAltura

    if (altura1 < altura2) {
        console.log('\n-----------------------------------------')
        menorAltura = `A criança 1 tem menor altura ${altura1}cm`
    } else if (altura1 > altura2) {
            console.log('\n-----------------------------------------')
            menorAltura = `A criança 2 tem menor altura ${altura2}cm`
        } else {
            console.log('\n-----------------------------------------')
            menorAltura = 'As alturas das crianças são iguais'
        }
        console.log(menorAltura + '\n')

    const txCrescimento1 = altura1 * (taxa1 / 100)
    const txCrescimento2 = altura2 * (taxa2 / 100)

    let crescimentoAnual1 = altura1 + txCrescimento1
    let crescimentoAnual2 = altura2 + txCrescimento2

    let ano = 0
    
    //Verifcação 1
    if (crescimentoAnual1 < crescimentoAnual2) {
        while (crescimentoAnual1 < crescimentoAnual2) {
            ano++
            crescimentoAnual1 += txCrescimento1
        }

        if (ano > 12) {
            console.log('A criança 1 não ultrapassará a criança 2 na fase infantil\n')
        } else {
            console.log(`Em ${ano} anos a criança 1 será maior que a criança com altura 2 \n`)
        }
        // Verificação 2
    } else if (crescimentoAnual2 < crescimentoAnual1) {
        while (crescimentoAnual2 < crescimentoAnual1) {
            ano++
            crescimentoAnual2 += txCrescimento2
        }
        
        if (ano > 12) {
            console.log('A criança 2 não ultrapassará a criança 1 na fase infantil \n')
        } else {
            console.log(`Em ${ano} anos a criança 2 será maior que a criança com altura 1 \n`)
        }
    }
}
crescimentoKids(110, 2, 140, 10)
crescimentoKids(140, 10, 140, 2)
crescimentoKids(160, 4, 160, 2) //Adolescentes
crescimentoKids(60, 2, 40, 6) //Bebês
crescimentoKids(40, 1, 40, 5)