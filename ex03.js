//My solution --> Using a Math method
const exponent = (x, y) => {
    return Math.pow(x, y)
}

console.log(exponent(2, 2))


// Teacher solution ---> The same thing
function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))