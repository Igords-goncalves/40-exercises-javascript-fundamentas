//// Função vai receber 2 strings como parametro

// Retornar true or false caso os caracteres maiusculos ou minuscolos estejam na mesma palavra

function verificarCaracteres(string1, string2) {
    for (let i = 0; i < string1.length; i++) {
        let verify1 = string1.charAt(i).toUpperCase()

        for (let j = 0; j < string2.length; j++) {
            let verify2 = string2.charAt(j).toUpperCase()

            if ( verify1 == verify2) {
                return true // Tem os mesmos caracteres
            } else { 
                return false // Tem caracteres diferentes
            }
        }
    }
}

console.log(verificarCaracteres("Armando", "armando"))
console.log(verificarCaracteres("Armando", "bananada"))
console.log(verificarCaracteres("Armando", "r"))