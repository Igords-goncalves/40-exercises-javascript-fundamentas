//// Como params altura e txCrescimento

//// existe uma criança menor?

// Em quantos anos a crinaça menor vai ultrapassar a maior?

//// Unidade padrão centimetros

function crescimentoKids(altura1, taxa1, altura2, taxa2) {
    
    const txCrescimento1 = altura1 * taxa1
    const txCrescimento2 = altura2 * taxa2

    console.log(txCrescimento1)
    console.log(txCrescimento2)
    
    let menorAltura

    if (altura1 < altura2) {
        menorAltura = `A crinça com menor altura é kid1 com ${altura1}`
    } else if (altura1 > altura2) {
            menorAltura = `A crinça com menor altura é kid2 com ${altura2}`
        } else {
            menorAltura = 'As alturas das crianças são iguais'
        }
        console.log(menorAltura)
}
crescimentoKids(110, 130, 3, 2)