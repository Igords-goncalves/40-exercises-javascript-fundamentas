/*
 * Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
 * Caso kiwi, retorne: “Estamos com escassez de kiwis”. 
 * Caso melancia, retorne: “Aqui está, são 3 reais o quilo”.
 */

function fruitMessages(fruits) {
    switch (fruits) {
        case "apple" :
            console.log("We don't sell this fruit here")
            break;
        case "watermellon" :
            console.log("Here you are, it's U$3 per kg")
            break;
        case "kiwi":
            console.log("We're short of kiwi")
            break;
        default:
            console.log("It's not a valid fruit")
            break;
    }
}

fruitMessages("apple")
fruitMessages("watermellon")
fruitMessages("kiwi")
fruitMessages("bla bla")
