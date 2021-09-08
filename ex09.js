// Todo aluno recebe uma nota de 0 a 100
// Alunos com nota abaixo de 40 são reprovados.

/* As notas possuem a seguinte regra de arredondamento (Regras de Negócio)

--> Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, 
arredondar a nota para esse próximo múltiplo de 5 --> Quem são os múltiplos de 5?

--> Se a nota for ABAIXO grade < 38 ---> de 38, não é feito nenhum arredondamento pois esta nota 
resulta na reprovação do aluno

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

    let roundingGrades = (grade) => {
        if(grade < 40) {
            console.log('DISAPPROVED')
        }
    }
    roundingGrades(finalGrade)
}




gradesSystem(100, 10, 20); //Array grades or number ?