//// Algoritmo que percorra um vetor

//// Conte quantos números negativos existem

//// Display a quantidade total

const vetor = [-1, 4, 5, -6, 8, 10, -13, 5, -8]

let total = 0

for (i in vetor) {
    if (vetor[i] < total) {
        total++
    }
}
console.log(`O total de números negativos é ${total}`);