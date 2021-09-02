//My way -->

// J = C * i * t --> Juros Simples
// M = C + J --> Montante

//M = C(1 + i)^t --> Juros Compostos

function simpleInterest(C, i, t) {
    let calc = C * i * t
    let compoundInterest = function() { //Retornar o capital inicial
        Math.pow((1 + i), t) / C + calc
        return compoundInterest()
    }
    return C + calc + compoundInterest
}

const amount = simpleInterest(1000, 0.10, 2)
console.log('$'+ amount)

//Teacher way -->
