//!Array e`lon qilishning 2 usuli Mavjud
const numbers: number[] = [1, 2, 3, 4];
const numbersAndStrings: Array<number | string> = [1, 2, 3, 4, "Salim"];
console.log(numbersAndStrings);

//! obyekt qovurg`asi
type Users = {
  name: string;
  age: number;
};
//! obyektni typescriptda taypini e`lon qilib yozish
const user: Users = {
  name: "Jasur",
  age: 21,
};
//! obyektdan tashkil topgan array
const users: Array<Users> = [
  {
    name: "Jasur",
    age: 21,
  },
];
//! function any datatype
function fn(name: string, age: number): string {
  return `My name is ${name} and I'm ${age} years old!`;
}
const intro = fn("Sardor", 19);
console.log(intro);
