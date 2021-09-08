/* As notas possuem as seguintes regras de arredondamento (Regras de Negócio)

--> Todo aluno recebe uma nota de 0 a 100

--> Alunos com nota abaixo de 40 são reprovados (Regra Falsa)

--> Se a nota for ABAIXO grade < 38 ---> de 38, não é feito nenhum arredondamento pois esta nota 
resulta na reprovação do aluno

--> Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, 
arredondar a nota para esse próximo múltiplo de 5 --> Quem são os múltiplos de 5?

--> Por exemplo, a nota 84 será arredondada para 85, 
mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, 
ou seja, que evite a reprovação do aluno 

--> No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */

// Será um programa que analisa as notas dos alunos de determinada instituição.

// 1 - Construct a function
// 2 - Use math.floor
// 3 - The grade jumper is 10 in 10


function gradesSystem(firstTwoMonths = 0, secondTwomonths = 0, thirdTwoMonths = 0, fourthTwoMonths = 0) {
    
    let ftm = firstTwoMonths
    let stm = secondTwomonths
    let ttm = thirdTwoMonths
    let fth = fourthTwoMonths

    const finalGrade = (ftm + stm + ttm + fth) / 4

    let roundingGradesRules = (grade) => { // grade === finalGrade 
        if(grade < 38) {
            console.log('DISAPPROVED')
        } else if (grade > 38) { //Rounding to up
            if (grade % 5 < 3) {
            }
            let rounded = Math.ceil(grade + (grade % 5))
            console.log('APROVED')
            console.log("Grade rounded = " + rounded) //Teste
        }
    }

    console.log(`Your final grade is ${finalGrade}`)
    roundingGradesRules(finalGrade)
}

gradesSystem(91.34, 51, 0); //Array grades or number ?