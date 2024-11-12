//Task_1

function square(userNum, userNum2) {
    return userNum ** 3 + userNum2 ** 3;
}

let userNum = Number(prompt('Введите первое число'));
let userNum2 = Number(prompt('Введите второе число:'));
if (isNaN(userNum)) {
    console.log('Ошибка');
} else {
    let afterSquare = square (userNum, userNum2);
    console.log(afterSquare);
}

//Task_2

function percent(userNum) {
    return userNum * 0.87;
}

let userNum = Number(prompt('Сколько вы зарабатываете'));
if (isNaN(userNum)) {
    console.log('Ошибка');
} else {
    let afterPercent = percent (userNum);
    console.log(`Размер заработной платы за вычетом налогов равен: ${afterPercent} рублей`);
}

//Task_3

function maximum(a, b, c) {
    return Math.max(a, b, c);
}

let userNum = Number(prompt('Введите первое число'));
let userNum2 = Number(prompt('Введите второе число'));
let userNum3 = Number(prompt('Введите третье число'));

if(isNaN(userNum)) {
    console.log('Ошибка');
} else {
    let afterMaximum = maximum (userNum, userNum2, userNum3);
    console.log(`Максимальное число из введённых: ${afterMaximum}`);
}

//Task_4

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return b !== 0 ? a / b : 'На ноль делить нельзя!';
}

let userNum = Number(prompt('Введите первое число'));
let userNum2 = Number(prompt('Введите второе число'));
if (isNaN(userNum)) {
    console.log('Ошибка');
} else {
    let afterAddition = addition (userNum, userNum2);
    let afterSubtraction = subtraction (userNum, userNum2);
    let afterMultiply = multiply (userNum, userNum2);
    let afterDivision = division (userNum, userNum2);
    console.log(afterAddition);
    console.log(afterSubtraction);
    console.log(afterMultiply);
    console.log(afterDivision);
}