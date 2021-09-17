// valor fixo 100
// Taxas:
    // criança < 10 == 80
    // conveniados >= 10 ||< 30 == 50
    // conveniados > 30 && < 60 == 95 
    // conveniados > 60 == 130

function healthPlan(age, mensality = 100) {
    if (age < 10) {
        return mensality + 80
    } else if(age >= 10 && age < 30) {
        return mensality + 50
    } else if(age >= 30 && age < 60) {
        return mensality + 95
    } else if(age >= 60) {
        return mensality + 130
    }
}

console.log(`The cost of your plan is U$${healthPlan(58)},00`)