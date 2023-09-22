"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // const interface = "Audio";
// // const private = 534;
// // const if = 23;

// Functions in JavaScript

// function logger() {
//   console.log("My name is Jonas");
// }
// // calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");
// console.log(num);

// // Function Declaration:
// function calculateAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// const age1 = calculateAge1(1991);
// console.log(age1);

// Function Expression:
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

// Arrow function:
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear); //2037 - birthYear;
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retire 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// //const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["Bob", "Alice"];
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtman", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// const years2 = [];

// // calcAge(years);

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const age5 = calcAge(years[4]);
// console.log(age1, age2, age3, age4, age5);

// // years2.push(age1);
// // years2.push(age2);
// // years2.push(age3);
// // years2.push(age4);
// // years2.push(age5);
// // console.log("years2 array =>", years2);
// years.forEach((year) => {
//   const val = calcAge(year);
//   years2.push(val);
// });
// console.log(years2);

// const friends = ["Michael", "Steven", "Peter"];

// // Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);
// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);
// friends.push(23);
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("Steven"));
// console.log(friends.includes("23"));

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter!");
// }

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   profession: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // console.log(jonas.'last' + nameKey)

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, profession and friends."
// );
// console.log(interestedIn);

// switch (interestedIn) {
//   case "firstName":
//     console.log(jonas.firstName);
//     break;
//   case "lastName":
//     console.log(jonas.lastName);
//     break;
//   case "age":
//     console.log(jonas.age);
//     break;
//   case "profession":
//     console.log(jonas.profession);
//     break;
//   case "friends":
//     console.log(jonas.friends);
//     break;
//   default:
//     console.log("No value!");
//     break;
// }

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, profession and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasscmedtman";
// console.log(jonas);

// // Challenge
// // 'Jonas has 3 friends, and his best friend is Michael
// console.log(
//   `${jonas.firstName} has  ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
// );

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  profession: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,
  //   calcAge: function () {
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - years old ${
      this.profession
    } and  he ${this.hasDriverLicense ? "has a " : "has no "} driver's license`;
  },
};
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](jonas["birthYear"]));

// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
console.log(jonas.age);

// Challenge
// Jonas is a 46-year old teacher, and he has a / not a drivers's license

console.log(jonas.getSummary());
