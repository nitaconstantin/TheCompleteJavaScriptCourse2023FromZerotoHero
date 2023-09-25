'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   //   console.log(`Hi! I'm ${firstName}`);
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var milenial = true;
//       // Creating new variable with same name as outer scope's variable
//       const firstName = 'Steven';
//       const str = `Oh you are milenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';
//     }

//     // console.log(str);
//     console.log(milenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();
// console.log(me);
// // console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;
// Functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 4));
// console.log(addArr(2, 5));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArr = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
