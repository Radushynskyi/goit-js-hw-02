console.log("Задание 4");

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
const countDroid = prompt("Какое количество дроидов Вы хотите приобрести ?");

if (countDroid === null) {
    console.log('Отменено пользователем!');
} else if(!isNaN(countDroid)) {
    totalPrice = pricePerDroid * countDroid;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        console.log(`Вы купили ${countDroid} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
    }
} else {
    console.log('Неверно введено количество!');
}


console.log("--------------");