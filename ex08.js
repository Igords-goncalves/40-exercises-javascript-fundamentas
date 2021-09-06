//Pedro take notes of each point for match.
//On the final he sum the point and see if that sum is greatter than your last matches.

// 1 - We have strings with the total sum, I'll define the points.
// 2 - A function receive these strings.
// 3 - A function compair the values of strings, I need covert all index in number or separete these string
// 4 - Function return the numbers of times that he broken himself record, the major number
// 5 - Function return your worse game the minor number.
// 6 - The final result is a array with the index of worse and numbers of record broken

//PT-BR Obs. O exercício pede a pontuação final de cada, logo você deve supor que os pontos durante as partidas já foram registrados
//PT-BR Pontos da Partida Somados = Pontuação total da Partida

/* 
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

//My way --> My way is basead in convert all strings to numbers

function recordList(pointsList) {
    // Putting inside an arrays and separate strings
    let pointsArray = pointsList.split(",")
    let points = []
    //Coverting strings in numbers to make work easy
    for (let i in pointsArray) { 
        let pointsToNumber = parseInt(pointsArray[i])
        points.push(pointsToNumber) //Insert inside an array again
        // console.log(pointsToNumber) --> teste
    }
    //console.log(points) --> teste
    let recordsAnalisys = (values) => {
        let majorPoint = values[0]
        let minorPoint = values[0]
        let brokenRecord = 0

        for (let index = 1; index < values.length; index++) { //No index 0
            //console.log(index + " = " + values[index])
            if(values[index] > majorPoint) {
                majorPoint = values[index] //Obvisioly
                brokenRecord ++ //Times of record broken
                //console.log(brokenRecord) //Idex of the record broken
            } else if (values[index] < minorPoint) {
                minorPoint = values[index]
                //console.log(index) //Index of the worst match
            }
        }
        return [brokenRecord, minorPoint]

    }
    console.log(recordsAnalisys(points)) //The param values receive a value of points
}


//Now I can use parameters strings as a points

recordList('10, 2, 1, 43, 53, 3')



//Teacher way --> Its more simples but without coversion to number

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))
