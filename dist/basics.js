"use strict";
//!Array e`lon qilishning 2 usuli Mavjud
const numbers = [1, 2, 3, 4];
const numbersAndStrings = [1, 2, 3, 4, "Salim"];
console.log(numbersAndStrings);
//! obyektni typescriptda taypini e`lon qilib yozish
const user = {
    name: "Jasur",
    age: 21,
};
//! obyektdan tashkil topgan array
const users = [
    {
        name: "Jasur",
        age: 21,
    },
];
//! function any datatype
function fn(name, age) {
    return `My name is ${name} and I'm ${age} years old!`;
}
const intro = fn("Sardor", 19);
console.log(intro);
