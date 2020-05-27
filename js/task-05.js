console.log("Задание 5");

const userCountry = prompt('Укажите страну для доставки товара ');
let cost;


if (userCountry === null) {
    console.log('Отменено пользователем!');
} else {
    switch(userCountry.toLowerCase()) {
        case 'китай': cost = 100;
        break;

        case 'чили': cost = 250;
        break;

        case 'австралия': cost = 170;
        break;

        case 'индия': cost = 80;
        break;

        case 'ямайка': cost = 120;
        break;
        
        default:
            alert('В вашей стране доставка не доступна');
    }
    if(cost){
        console.log(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
    }
}



console.log("--------------");