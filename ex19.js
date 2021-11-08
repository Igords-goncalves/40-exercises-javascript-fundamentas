function menu(cod, qtd) {
    switch (cod) {
        case 100:
            console.log(`${qtd} : Hot Dog = ` + (`R$ ${qtd * 3},00`));
            break;
        case 200:
            console.log(`${qtd} : Hamburger Simples = ` + (`R$ ${qtd * 4},00`));
            break;
        case 300:
            console.log(`${qtd} : Cheeseburger = ` + (`R$ ${qtd * 5.5}0`));
            break;
        case 400:
            console.log(`${qtd} : Bauru = ` + (`R$ ${qtd * 7.5},00`));
            break;
        case 500:
            console.log(`${qtd} : Refrigerante = ` + (`R$ ${qtd * 3.5}0`));
            break;
        case 600:
            console.log(`${qtd} : Suco = ` + (`R$ ${qtd * 2.8}0`));
            break;
        default:
            console.log('It´s not a product')
            break;
    }
}
menu(300, 1)
menu(100, 2)
menu(400, 2)
menu(200, 8)
menu(600, 2)
menu(500, 3)