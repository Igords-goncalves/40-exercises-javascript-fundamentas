/* 
 * Equilátero: Os três lados são iguais. 
 * Isósceles: Dois lados iguais.
 * Escaleno: Todos os lados são diferentes.
 */ 

//My solution --> Using a traditional control sctructure If Esle

function typeTriagle (a, b, c) { //The compair is only made by two args
    if(a == b && b == c ) {
        return 'Equilátero'
    } else if ((a == b && a != c) || (b == c && b != a ) || (c == a && c != b)) {
        return 'Isóceles'
    } else if (a != b && b != c) { //Could I abstract the last compartion it was obvly
        return 'Escaleno' 
    } else {
        return 'Its not a tringle'
    }
}
console.log(typeTriagle(2, 2, 2))
console.log(typeTriagle(6, 2, 2))
console.log(typeTriagle(2, 3, 5))

