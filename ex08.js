//Pedro take notes of each point for match.
//On the final he sum the point and see if that sum is greatter than your last matches.

// 1 - We have strings with the total sum, I'll define the points.
// 2 - A function receive these strings.
// 3 - A function compair the values of strings, I need covert all index in number or separete these string
// 4 - Function return the numbers of times that he made broke himself record of bigger number of point for match.
// 5 - Function return your worse game.

//PT-BR Obs. O exercício pede a pontuação final de cada, logo você deve supor que os pontos durante as partidas já foram registrados
//PT-BR Pontos da Partida Somados = Pontuação total da Partida

//My way -->

function record(pointsList) {

    let pointsArray = pointsList.split(",")// looking teacher --> Putting inside a arrays
    let points = []

    for (let i in pointsArray) { //Coverting string in numbers
        let pointsToNumber = parseInt(pointsArray[i])
        
        points.push(pointsToNumber)
        // console.log(pointsToNumber) teste
    }

    console.log(points)
}



record('10, 2, 1, 80, 43') //Taking notes about total point for match

//Teacher way -->