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

//My way -->

function recordList(pointsList) {
    // Putting inside an arrays and separate strings
    let pointsArray = pointsList.split(",")
    let points = []

    //Coverting strings in numbers to make work easy
    for (let i in pointsArray) { 
        let pointsToNumber = parseInt(pointsArray[i])
        points.push(pointsToNumber)
        // console.log(pointsToNumber) --> teste
    }
    //console.log(points) --> teste
    let brokingRecords = (values) => {
        let majorPoint = 0
        let minorPoint = 0
        for (let index = 1; index < values.length; index++) { //No index 0
            console.log(index + " = " + values[index])
            if(values[index] > majorPoint) {
                majorPoint = values[index]
                console.log(majorPoint)
            }
        }
        return values
    }
    console.log(brokingRecords(points))
}


//Now I can use parameters strings as a points

recordList('10, 2, 1, 80, 43, 53, 3, 700')

//Teacher way -->