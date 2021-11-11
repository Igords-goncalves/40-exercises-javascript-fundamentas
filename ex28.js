function parOuImpar(array) {
    
    par = 0
    impar = 0

    for(let i in array) {
        if(array[i] % 2 ==0) {
            par = par + 1 
            } else {
            impar = impar + 1
        }
    }
    console.log(`Valores par = ${par} e Impares = ${impar}`)
}

parOuImpar([1,4,6,7,3,2,0,71,81])
parOuImpar([1,4,6,7,3,2,0,71,81, 99, 64, 11000, 3131, 4353])