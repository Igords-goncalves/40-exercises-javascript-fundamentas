//My way -->

// J = C * i * t --> Juros Simples
// M = C + J --> Montante

//M = C(1 + i)^t --> Juros Compostos

function simpleInterest(C, i, t) {
    let calc = C * i * t //Escopo Local

    let compoundInterest = () => {
        let result = C * ((1 + i) ** t) //Escopo Local
        return result
    }
    console.log(C + calc)
    return compoundInterest().toFixed(2)
}

const amount = simpleInterest(1000, 0.10, 2)
console.log('$'+ amount)


//Teacher way --> Using a simple form to make things

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
