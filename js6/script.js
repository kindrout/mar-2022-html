// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arr = 'hello world';
console.log(arr.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let ar = arr.concat(' lorem ipsum', ' javascript is cool');
console.log(ar);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.replaceAll(' ', ''));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '));
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let array = ['Ревуть', 'воли', 'як', 'ясла', 'повні'];
console.log(array);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let nums = [10,8,-7,55,987,-1011,0,1050,0];
// let num = nums.map(function (number) {
//     let block = [];
//     block.push(number);
//     console.log(block);
// });


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
let nums = [11,21,3];
// console.log(nums.sort((nums1, nums2) => nums2 - nums1));
function sortNums (array, direction) {
    if (direction === 'ascending') {
        console.log(nums.sort((nums1, nums2) => nums1 - nums2));
    } else {
        console.log(nums.sort((nums1, nums2) => nums2 - nums1));
    }
}
sortNums(nums,'ascending');
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((m1, m2) => m1.monthDuration - m2.monthDuration));
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration >= 5);
console.log(filter);

//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//

let cards = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
];

console.log(cards.find(value => value.value = 6));

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

