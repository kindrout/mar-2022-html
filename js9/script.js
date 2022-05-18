// // Все робити за допомоги js.
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// //
//
// let block = document.createElement('div');
// block.setAttribute('class','wrap, collapse, alpha, beta')
// block.style.background = 'lightblue'
// block.style.color = 'red'
// block.style.fontSize = '15px'
// block.innerText = 'Hi How are you?'
// document.body.appendChild(block);
// document.body.appendChild(block.cloneNode(true));
//
// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// let arr = ['Main','Products','About us','Contacts'];
// for (const string of arr) {
//     let elements = document.getElementsByClassName('menu')[0];
//     let li = document.createElement('li')
//     li.innerText = string
//     elements.appendChild(li);
// }
// // - Є масив
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// //
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
// //     let ro = document.createElement('div')
// //     ro.setAttribute('class','classic')
// //     ro.innerText = `${coursesAndDurationArrayElement.title}, ${coursesAndDurationArrayElement.monthDuration}`
// //     document.body.appendChild(ro)
// // }
// // - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let element = document.createElement('div')
    element.className = 'item'
    let element2 = document.createElement('h1')
    element2.className = 'heading'
    element2.innerText = `${coursesAndDurationArrayElement.title}`
    element.appendChild(element2)
    let element3 = document.createElement('p')
    element3.className = 'description'
    element3.innerText = `${coursesAndDurationArrayElement.monthDuration}`
    element.appendChild(element3)
    document.body.appendChild(element)
}
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

