//My way --> I decided use a ternary operator

function verifier(n) {
    let number = n % 3 == 0 ? true : false
    console.log(number)
    return number
}
verifier(18)
verifier(2)

//Teacher way --> Use control structure

function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))