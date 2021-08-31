//May solution --> Using a abstract arro function and a concatenation
const moduleDivisor = (x, y) => x / y + " with rest of divison " + x % y

console.log(moduleDivisor(10, 6))
console.log(moduleDivisor(4, 2))

//Teacher Solutin -->

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)