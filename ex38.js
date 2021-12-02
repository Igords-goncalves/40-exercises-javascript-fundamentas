// Função contador de 0 a 100

// Imprimindo todos os impares

// Se ao passar os parametros a ordem for inversa corrija isso

function contadorImpar(inicio = 0, fim = 100) {
    if (inicio > fim) {
        
        // Lógica para troca de valores
        inicio = fim + inicio //  2 + 17 = 19
        fim = inicio - fim // 19 - 2 = 17 fim
        inicio = inicio - fim // 19 - 17 = 2 incio
    }

    for (let cont = inicio; cont < fim; cont++) {
        if (cont % 2 == 1) {
            console.log(cont)
        }
    }
}

contadorImpar(17, 2)