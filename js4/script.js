function square(a,b,action) {
    let answer = (a * b);
    console.log(answer);
}

square(12,24);



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
    document.write(`<ul>
        <li>${text1}</li>
        <li>${text1}</li>
        <li>${text1}</li>
    </ul>`);
}

list('Hello Girls', 12);

function tester(a,b,c) {
    if (a < b && a < c) {
        console.log(a);
    }else if (b < a && b < c) {
        console.log(b);
    }else if (c < b && c < a) {
        console.log(c);
    }else {
        console.log(NaN);
    }
}

tester(13,19,2);

function calc() {
    let result = 0;
    for (let item of arguments) {
        result = result + item;
    }
    return result;
}

console.log(calc(12,22,33,44));
