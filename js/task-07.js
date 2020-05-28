console.log("Задание 7");

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    return login.length >= 4 && login.length <=16;
    /*if(login.length >= 4 && login.length <=16) {
       return true; 
    }
    return false;*/
};
//console.log(isLoginValid('Peter'));
const isLoginUnique = function(allLogins, login) {
    return !allLogins.includes(login);
    /*if(allLogins.includes(login)) {
        return false;
    } else {
        return true;
    }*/
};
//console.log(isLoginUnique(logins, 'sPoly'));
const addLogin = function(allLogins, login) {
    if(!isLoginValid(login)){
        return'Ошибка! Логин должен быть от 4 до 16 символов';
    }
    if(!isLoginUnique(allLogins, login)){
        return'Такой логин уже используется!';
    }
    if(isLoginUnique(allLogins, login)){
        logins.push(login);
        return 'Логин успешно добавлен!';
    }
};
//console.log(addLogin(logins, 'Pol'));
//console.log(addLogin(logins, 'Poly'));
//console.log(addLogin(logins, 'Polyss'));
//console.log(logins);
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log("--------------");