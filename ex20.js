/* 
 * R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.

 !O objetivo é entregar o minimo de cédulas, ou seja, otimizar o troco.

 * Por exemplo, ao informar 18, o programa deve
 * informar apenas a seguinte informação (note que não foram exibidas 
 * informações sobre as demais cédulas):
 * 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. 
*/

function valorDoUsuario(valor) {
   const notas = [100, 50, 10, 5, 1]
   let cedulas = 0 //Recebe 0 agora pois vai receber o numero de cedulas depois
   let valorSubtraido
   let contagem = ''

   for(let i = 0; i < notas.length; i++) {
        if (valor >= notas[i]) {
            
            //Regra de negócio

            // Especificando a quantidade de cada nota(elemento) dentro do array
            cedulas = (valor - (valor % notas[i])) / notas[i]

            //! Distribuição das notas visando o minimo de notas para atingir o valor
            valorSubtraido = valor - (valor % notas[i])
            valor -= valorSubtraido

            // contagem das notas e impressão
            if (cedulas > 1) {
                contagem = contagem + `${cedulas} notas de R$${notas[i]},00 `
            } else {
                contagem = contagem + `${cedulas} nota de R$${notas[i]},00 `
            }
        }

    }
    return contagem
}
console.log(valorDoUsuario(350))