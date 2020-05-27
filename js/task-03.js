console.log("Задание 3");

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль ');

if (message === null) {
    console.log('Отменено пользователем!');
} else if(ADMIN_PASSWORD === message.toLowerCase()) {
    console.log('Добро пожаловать!');
} else {
    console.log('Доступ запрещен, неверный пароль!');
}
alert(message);
console.log("--------------");