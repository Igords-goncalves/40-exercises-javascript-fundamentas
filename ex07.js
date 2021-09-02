// Formula b^2 - 4 * a * c
// Find Δ

// x = - b +- √Δ / 2 * a
// Return x' and x"

//My way --> The problem in my was, a little of math, not use the push method and not see that result can would be a array 

//Equation standard: 3x² - 5x + 12 = 0

const baskhara = (a = 3 , b = - 5, c = 12) => { //I can allready use standard params
    let result = [] //Looking teacher
    let delta = (b ** 2)  - (4 * (a * c)) 

    if (delta < 0) {
        console.log('Negative Delta')
    } else { 
        console.log('Delta is: '+ delta)
        // let x =  -(-b + Math.sqrt(delta)) / 2 * a --> x' and x"

        let x1 = (-b + Math.sqrt(delta)) / 2 * a; //Looking teacher
        let x2 = (-b - Math.sqrt(delta)) / 2 * a; //Looking teacher
        result.push(x1) //Looking teacher
        result.push(x2) //Looking teacher
        return result //Looking teacher
    }
}

console.log(baskhara(1, -1, -12)) //Traying to oder things

//Teacher way --> Teacher is using more simple way

function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/2*ax2
    let x2 = (-bx - Math.sqrt(delta))/2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))