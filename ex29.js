//// Utilize o for

//// A função deve percorrer o vetor

//? Quantos numeros estão no intervalo [10,20] incluindo o 10 e o 20?

//? Quantos deles estão fora do intervalo?

function percorrerVetor(valor) {
    let totalDeNumeros = 0
    for (let index = 0; index < valor.length; index++) {
        if (valor[index] >= 10 && valor[index] <=20) {
            totalDeNumeros ++
        }
    }
    console.log(`O total de numeros entre 10 e 20 é: ${totalDeNumeros}`);
}

percorrerVetor([17,1,2,3,4,5,6,7,8,9,10,2,0,15,16,20]);
percorrerVetor([4,5,6,7,8,9,10,2,16,20]);