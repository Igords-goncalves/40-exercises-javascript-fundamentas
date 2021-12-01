//// Uma função para progressão aritimética

//// Uma função progressão geométrica

//// Os parâmetros serão n, a1, r

// Escreva os n termos e a soma dos elementos

// Fórmula de pa => an = a1 + (n -1) * r 

// Fórmula de pg => an = a1 * (q^n-1)

function pa(n, a1, r) {
    let soma = 0
    let termos = 0
    for (let i = 0; i < n; i++) {
        termos = a1 + r * i // a1 sempre será = 2, r sempre será = 3 e i = está no laço
        console.log(`n = ${termos}`);
        soma = soma + termos
        
    }
    console.log(`an = ${soma}`)
}

function pg(n, a1, r) {
    let soma = 0
    let termos = 0
    let produto = a1 - 1
    for (let i = 0; i < n; i++) {
        termos = a1 * r ** i
        soma = soma + termos
        produto = produto * termos
        console.log(`n = ${termos}`);
    }
    console.log(`an = ${soma}`)
    console.log(`res = ${produto}`)
}

pa(5, 2, 3)
console.log("--------------")
pg(5, 2, 3)