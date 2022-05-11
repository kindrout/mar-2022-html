// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
class User {
    constructor(id, name, surname, email, phone ) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
    }
}

const userCharacter = new User(11, 'Artur', 'Kindrat', 'artik241999@gmail.com', '0976004812' )
const userCharacter1 = new User(12, 'Andrii', 'Abra', 'arin@gmail.com', '0976004810')
const userCharacter2 = new User(13,'anna', 'abi', 'andjsds@gmail.com', '0976004811')
const userCharacter3 = new User(14,'alona', 'avr', 'ksjods@gmail.com', '0976004819')
const userCharacter4 = new User(15,'arisha', 'aedfd', 'shudgus@gmail.com', '0976004813')
const userCharacter5 = new User(16,'ameba', 'accx', 'hdfjdnc@gmail.com', '0976004814')
const userCharacter6 = new User(17,'agrid', 'acxcd', 'sdffdfs@gmail.com', '0976004815')
const userCharacter7 = new User(18,'arina', 'adcdc', 'dsfdsf@gmail.com', '0976004816')
const userCharacter8 = new User(19,'abraham', 'acdcdc', 'sfdbgxcc@gmail.com', '0976004817')
const userCharacter9 = new User(10,'atricuro', 'asdcwe', 'sdwfscx@gmail.com', '0976004818')
console.log(userCharacter);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
const empty = [];
empty.push(userCharacter, userCharacter1, userCharacter2, userCharacter3, userCharacter4, userCharacter5, userCharacter6, userCharacter7, userCharacter8, userCharacter9)
console.log(empty);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = empty.filter(value => value.id % 2 === 0)
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let filter = empty.sort((a, b) => b.id - a.id)
console.log(filter);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car () {
    this.model = 'hatchback'
    this.creator = 'german'
    this.year = 2022
    this.maxSpeed = 300
    this.hp = 558
    this.drive = function (msg) {
        return `we drive ${msg} speed`
    }

    this.increaseMaxSpeed = function (msg) {
        this.maxSpeed = msg
    }

    this.newDriver = function (msg) {
        this.driver = msg
    }
    // this.info = function (msg) {
    //     let information = 0;
    //     for (const msgKey in Car) {
    //          information = msgKey += msg
    //     }
    //     console.log(information);
    // }
}


let car1 = new Car();
console.log(car1);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

console.log(car1.drive('222'));

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// car1.info()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

car1.increaseMaxSpeed(310);
console.log(car1);

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
let driverious = [{
    name: 'Artur', age: 22, status:'proDriver',
}
]

car1.newDriver(driverious);
console.log(car1);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelush {
    constructor(name, age, size) {
        this.name = name
        this.age = age
        this.size = size
    }
}

const popelush = [
new Popelush('arina', 21, 31),
new Popelush('angela', 22, 32),
new Popelush('anna', 23, 33),
new Popelush('alona', 24, 34),
new Popelush('anissa', 25, 35),
new Popelush('abby', 26, 36),
new Popelush('ariel', 27, 37),
new Popelush('ariana', 28, 38),
new Popelush('agrisha', 29, 39),
new Popelush('alabania', 30, 40),
new Popelush('akira', 31, 41)]

const prince = new Popelush('Richard', 35,35)

let array = [];
array.push(popelush)

let find = (unit1, unit2) => {
    for (const element of unit1) {
        if (element.size === unit2.size) {
            return `${element.name + ' ' + unit2.name + ' ' + 'love'}`
        }
    }

}
console.log(find(popelush, prince));

