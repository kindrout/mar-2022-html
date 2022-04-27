function square(a,b,action) {
    return a * b;
}

console.log(square(12,24));




let mas = [
    {name:'Artur', age: 32, status: 'true', mind: 'on'},
    {name:'Andiy', age: 22, status: 'true', mind: 'off'},
]

function mass(array) {
    for (let item of array) {
        console.log(item);
    }
}

mass(mas);


function text (massage) {
    document.write(`<p>${massage}</p>`);
}

text('Hello Guys');

function list(text1, number) {
   document.write(`<ol>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text1}</li>`)
    }

    }
   document.write(`</ol>`)


list('Hello Girls', 19);


let num = [23,45,88,54,12,34]
// function minCalc (array) {
//    let minNum = array[0];
//     for (let i = 0; i < minNum; i++)
//        if (minNum > array[i]) {
//            minNum = array[i];
//        }
//
//     console.log(minNum);
//    }
//
// minCalc(num);






function minCalc (arr) {
    let minNum = arr[0]
    for (let i = 0; i < minNum; i++) {
        const minNumElement = arr[i];
        if (minNum > arr[i]) {
            minNum = arr[i]
            console.log(minNum);
        }
    }
}

minCalc (num);


// function calc() {
//     let result = 0;
//     for (let item of arguments) {
//         result = result + item;
//     }
//     return result;
// }
//
// console.log(calc(12,22,33,44));

function calc() {
    let result = 0;
    for (let item of arguments) {
        result = item + result;
    }
    return result;
}

console.log(calc(12,23,55,63,78));

