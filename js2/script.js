let x = 12;
let a = 0;
if (a === 0) {
    console.log('ok');
} else {
    console.log('not ok');
}



let time = 59;
if (time >= 1 && time <= 15) {
    console.log('1');
} else if (time >= 16 && time <= 30){
    console.log('2');
} else if (time >= 31 && time <= 45){
    console.log('3');
} else if (time >= 46 && time <= 59){
    console.log('4');
} else {
    console.log('go away');
}



let day = 32;
if (day >= 1 && day <= 10) {
    console.log('1');
} else if (day >= 11 && day <= 20){
    console.log('2');
} else if (day >= 21 && day <= 31){
    console.log('3');
} else {
    console.log('go away');
}


// switch (prompt('weekday')) {
//     case '1':
//         alert('Monday');
//         break;
//     case '2':
//         alert('Tuesday');
//         break;
//     case '3':
//         alert('Wednesday');
//         break;
//     case '4':
//         alert('Thursday');
//         break;
//     case '5':
//         alert('Friday');
//         break;
//     case '6':
//         alert('Saturday');
//         break;
//     case '7':
//         alert('Sunday');
//         break;
//     default:
//         alert('?????');
// }


let number1 = prompt('Please write first number');
let number2 = prompt('Please write second number');
if (number1 > number2) {
    alert(number1);
} else if (number1 < number2) {
    alert(number2);
} else if (number1 === number2) {
    alert(number1);
}