//// Algoritimo ue calcule a média aritimética dos elementos de uma array

//// Criar função reutilizável

//// Passar como parâmetro um vetor

function calculoDeMédia(vetor) {
    let soma = 0
    let media = 0
    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }
    media = soma / vetor.length
    console.log(media);
}

calculoDeMédia([1,2,3,4,5])
calculoDeMédia([2,19,4])