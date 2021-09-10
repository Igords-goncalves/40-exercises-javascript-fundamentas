// hatch --> “Compra efetuada com sucesso”.
// Outros modelos --> “Tem certeza que não prefere este modelo?”.
// Modelos não validos --> “Não trabalhamos com este tipo de automóvel aqui”.

function carSale(car) {
    switch (car) {
        case "hatch":
            console.log("Compra efetuada com sucesso")
            break;
        case "sedan":
            console.log("Tem certeza ue não prefere este modelo?")
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui")
            break;
    }
}
carSale("hatch")
carSale("sedan")
carSale("fusca")
