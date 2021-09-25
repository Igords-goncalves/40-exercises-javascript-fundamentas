// Hello World 11 vezes

function greeting(text) {
    let repetition = 1
    let number  = 1
    do {
        console.log(number + ' - ' + text)
        repetition++
        number++
    } while (repetition <= 11);
}
greeting('Hello World!')