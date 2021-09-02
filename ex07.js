// Formula b^2 - 4 * a * c
// Find Δ

// x = - b +- √Δ / 2 * a
// Return x' and x"

//My way --> 

//Equation: 3x² - 5x + 12 = 0

const baskhara = (a = 3 , b = - 5, c = 12) => { //I can allready use standard params
    let result = []
    let delta = (b ** 2)  - (4 * (a * c))

    if (delta < 0) {
        console.log('Negative Delta')
    } else { 
        let x1 = -(-5 + Math.sqrt(delta) / 2 * a);
        let x2 = -(-5 - Math.sqrt(delta) / 2 * a);
        result.push(x1)
        result.push(x2)
        return result //O método é o push
    }
}

console.log(baskhara(1, 3, 2)) //Traying to oder things

//Teacher way -->