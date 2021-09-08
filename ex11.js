/*

De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Acrescente uma verificação automática para o ano autal e os próximos anos

Anos bissextos sao divisiveis por 4 "e" nao por 100 "ou" talves sim por 400

*/

function leapYear(year) {
    if (year <= 0) {
        console.log('Enter a valid year!')
    } else if (year % 4 == 0 && (year % 100 != 0 || year % 100 == 0 )) {
        return true +  " = It's a leap year!"
    } else {
        return false + " = It's not a leap year!"
    }
}
console.log(leapYear(2051))