function bonus(salary, plan) {
    switch (plan) {
        case "a":
            return ((salary * 10) / 100) + salary
        case "b":
            return ((salary * 15) / 100) + salary
        case "c":
            return ((salary * 20) / 100) + salary
        default:
            return ('Choose a valid plan')
            break;
    }
}
console.log(bonus(1000, "a"))
console.log(bonus(1000, "b"))
console.log(bonus(1000, "c"))