//My way --> Using a standad parameter

function simpleNumber (a = 0.30000000000000004) {
    return 'R$'+a.toFixed(2)
}

console.log(simpleNumber())

