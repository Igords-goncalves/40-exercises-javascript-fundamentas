/* 
 * R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.

 !O objetivo é entregar o minimo de cédulas, ou seja, otimizar o troco.

 Por exemplo, ao informar 18, o programa deve
 informar apenas a seguinte informação (note que não foram exibidas 
 informações sobre as demais cédulas):
 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. 
*/

function valorDoUsuario(valor) {
   const notas = [100, 50, 10, 5, 1]

   for(let i = 0; i < notas.length; i++) {
        if (valor > notas[i]) {
            const troco = valor / notas[i]
            console.log(`${troco} notas de ${notas[i]}`)
        }
    }
}

valorDoUsuario(500)