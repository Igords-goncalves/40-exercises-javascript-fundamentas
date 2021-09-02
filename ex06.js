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


//Teacher way -->
