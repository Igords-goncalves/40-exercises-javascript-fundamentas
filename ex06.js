//My way -->

// J = C * i * t --> Juros Simples
// M = C + J --> Montante

//M = C(1 + i)^t --> Juros Compostos

function simpleInterest(C, i, t) {
    let calc = C * i * t
     let compound = function ( ) { //Retornar o capital inicial
         Math.pow((1 + i), t) / C + calc
        console.log(compound.result)
    }
    return C + calc
}

const amount = simpleInterest(1000, 0.10, 2)
console.log('$'+ amount)

//Teacher way -->
