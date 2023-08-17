// console.log("My name is Sholpan")
// let firstName = "Sholpan"
// let age = 20

// console.log("My age is " + age);
// console.log(typeof age);
// console.log(typeof firstName);

// let person = {
//     firstName: "Temirlan",
//     lastName: "Aliyev",
//     salary: 30000000
// }  //object type

// console.log(typeof person);
// console.log("Person " + person.salary);
// console.log({person});

// function sum() {
//     let sum;

// }

let el = document.getElementsByClassName('number1');
let el2 = document.getElementsByClassName('number2');

let value1 = parseInt(el[0].value)
let value2 = parseInt(el2[0].value)

function sum() {
    // alert("Window")
    console.log(value1 + value2);
    console.log(typeof value1);
    return value1 + value2;  
}

console.log(el);
console.log(el2);

console.log(value1);
console.log(value2);