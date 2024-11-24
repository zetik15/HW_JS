//Task_1

let string = '-';
for (let i = 0; i < 10; i++) {
    if (i === 0) {
        console.log(`${i} ${string} это ноль`);
    }
    if (i % 2 === 1) {
        console.log(`${i} ${string} это нечетное число`);
    }
    if (i % 2 === 0 && i !== 0) {
        console.log(`${i} ${string} это четное число`);
    }
}

//Task_2

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

//Task_3

let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 10));
    if (arr[i] === 3) {
        console.log('В массиве есть число 3');
    }
}
let sum = arr.reduce((acc, num) => acc + num, 0);
let min = Math.min(...arr);
console.log(arr);
console.log(`Минимальное число в массиве: ${min}`);
console.log(`Сумма чисел в массиве: ${sum}`);

//Task_4

let string = 'x';
for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}
