function menu(cod, qtd) {
    switch (cod) {
        case 100:
            console.log('Hot Dog ' + (3 + qtd));
            break;
        default:
            console.log('It´s not a product')
            break;
    }
}
menu(100, 1)