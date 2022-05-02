// Все стірлочними!!!!!!!!!
// //     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let numbers = [20,30,12,32,12,43,66];
function calc(arguments) {
    let result = 0;
    for (const argument of arguments) {
        result = (argument + result) / arguments.length;
    }
    return result;
}

console.log(calc(numbers));
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function num(arr,fn) {
//     let minNum = arr[0];
//     for (let i = 0; i < minNum; i++) {
//         if (minNum > arr[i]) {
//             minNum = arr[i];
//             let result = minNum;
//             console.log(result);
//         }
//     }
//     fn (arr);
// }
// let cb = function (arr) {
//
// }
// num(numbers, cb);
// - створити функцію яка заповнює масив рандомними числами
// function random(arr) {
//     let array = [];
//     array.push(Math.round(Math.random()*100));
//     console.log(array);
// }
// random()
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function random(limit) {
    let array = [];
    array.push(Math.round(Math.random()*100));
    for (const arrayElement of array) {
        if (array > limit) {
            console.log('stop');
        } else {
            console.log(array);
        }
    }
}
random(73)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let num = [1,2,3,4,5,6,7,8]
function reverse(arguments) {
    let num2 = [];
    for (let i = arguments.length - 1; i >= 0; i--) {
        num2.push(arguments[i]);
    }
    console.log(num2);
}

reverse(num)

//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let fn = (a,b) => console.log(a * b);
fn (20,30);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let tr = (argument) => console.log(argument);
tr (users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let txt = (arguments) => (arguments);
console.log(txt('text'));
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.


