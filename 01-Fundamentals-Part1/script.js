let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firtsName = "Matilda";

// console.log(firtsName);
// console.log(firtsName);
// console.log(firtsName);

// // let 3years = 3;
// // let jonas&Matilda = 'JM';
// // let new = 27
// let firstName = "Jonas";
// let person = "jonas";
// let PI = 3.1415;

// let myFirsJob = "Coder";
// let myCurrentJob = "Teacher";

// // let job1 = "programmer";
// // let job2 = "teacher";

// console.log(myFirsJob);

// let country = "Romania";
// let continent = "Europe";
// let population = 19859575;
// console.log(country, continent, population);

// Primitive data types
/*
1. Number: ex: let age = 23
2. String: ex: let firtsName = 'Jonas';
3. Boolean ex: let fullAge = true;
4. Undefined ex: let children;
5. Null: Also means 'empty value';
6. Symbol(ES2015): value that is unique and cannot be changed;
7. BigInt(ES2020): larger integers than the Number type can hold
*/

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");

// javaScriptIsFun = "YES!";
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// // const job;

// var job = "programmer";
// job = "teacher";
// lastName = "Schmedtmann";
// console.log(lastName);

// BASIC OPERATORS
/*
const ageJonas = 2037-1997
*/
// Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2**3 means 2 to the power of 3 = 2*2*2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1;
// x--;
// x--;
// console.log(x);

// // Comparison Operators
// console.log(ageJonas > ageSarah); // > , <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job} !`;
// console.log(jonasNew);

// console.log(`Jonas a regular string ...`);
// // console.log('String with \n\
// // multiple \n\
// // lines
// // ');

// console.log(`String with
// multiple
// lines
// `);

// Taking decisions if/else statements

// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   //   console.log(
//   //     "Sarah can not start driving license until " + yearsLeft + " years!"
//   //   );
//   console.log(`Sarah is too young! Wait another ${yearsLeft} years!`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);
// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n); // 10

// Truthy and falsy values:
// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log('Don"t spend it all');
// } else {
//   console.log("You should get a job");
// }

// let height = 0;

// if (height) {
//   console.log("YEY, Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");

// if (age == 18) console.log("You just became an adult :D (loose)");

// const favourite = Number(prompt("'What's  your favourite number?"));
// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("Seven is also a cool number!");
// } else if (favourite === 9) {
//   console.log("Nine is also a cool number!");
// } else {
//   console.log("Number is not 23 or 7 or 9!");
// }

// if (favourite !== 23) {
//   console.log("Why not 23!");
// }

// const age = 16;
// const A = false;
// const B = true;
// console.log(!A);

// console.log(A && B);
// console.log(A || B);
// console.log(!A && B);
// console.log(A || !B);

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// // if (shouldDrive) {
// //   console.log("Sharah is able to drive!");
// // } else {
// //   console.log("Someone else should drive!");
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (shouldDrive && !isTired) {
//   console.log("Sharah is able to drive!");
// } else {
//   console.log("Someone else should drive!");
// }

const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
