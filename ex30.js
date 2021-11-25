// Algoritmo ue percorre um vetor

//? Quem é o maior elemento e quem é o menor elemento ?

function percorrerVetorEdefinirGrandeza(vetor) {
    let maior = 0;
    let menor = 0;
    for (i in vetor) {
        if (vetor[i] > maior) {
            maior = vetor[i]
            console.log(`Maior número é ${maior}`)
        }
    }
    if (vetor[i] < menor)  {
        menor = vetor[i]
        console.log(`Menor número é ${menor}`);
    }
}

percorrerVetorEdefinirGrandeza([500, 40, 10, 5, 9, 4, 2, -1, -30, -210])