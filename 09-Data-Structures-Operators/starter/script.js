'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Maps
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again '],
]);
console.log(question);

// Quiz app
console.log(question.get('question'));
// iteration
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// Convert Map to Array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log(question.values());
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze', 'Italy');
// rest.set(2, 'Lisbon', 'Portugal');
// console.log(rest.set(2, 'Lisbon Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// // console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get(open) && time < rest.get(close)));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get([1, 2]));

// SETS
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// console.log(ordersSet);
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffSet = [...new Set(staff)];

// console.log(staffSet);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// console.log(new Set('jonasschmedtmann').size);
// Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example:
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (let day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at  ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');
// // Arrays
// let users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// users = [];
// console.log(users[0]?.name ?? 'User array empty');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // mullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // and assignment operator
// rest2.owner = rest2.owner && '<ANONYMUS>';
// rest1.owner = rest1.owner && '<ANONYMUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
// console.log('------------OR--------------');
// //Use Any data type, return any data type, short circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('-------AND--------');
// console.log(0 && 'Jonas');
// console.log(7 && 'jonas');
// console.log('hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// // Spread , because in RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// // Rest, because in LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, Risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// //2) Functions
// const add = function (...numbers) {
//   // console.log(numbers);

//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };
// console.log(add(2, 3));
// console.log(add(5, 3, 7, 2));
// console.log(add(8, 2, 5, 3, 2, 1, 4));

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'salt', 'green salad, cucumber');
// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Via del Sol, 21',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // restaurant.orderDelivery({
// //   address: 'Via del Sole, 21',
// //   starterIndex: 1,
// // });

// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);
// // const newArr = [1, 2, ...arr];
// // console.log('NewArr: ', newArr);

// // console.log(...newArr);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // // Copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // // Join 2 arrays
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menu);

// // // Iterables: arrays, strings, maps, sets, but NOT objects

// // const str = 'Jonas';
// // const letters = [...str, '', 'S.'];
// // console.log(letters);

// // console.log(...str);
// // console.log('j', 'o');

// // // console.log(`${...str} Schmedtmann`)

// // // const ingredients = [
// // //   prompt(`Let's make pasta! Ingredient 1?`),
// // //   prompt(`Let's make pasta! Ingredient 2?`),
// // //   prompt(`Let's make pasta! Ingredient 3?`),
// // // ];

// // // console.log(ingredients);

// // // restaurant.orderPasta(...ingredients);

// // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Ristorante Roma';

// // console.log(restaurant.name, restaurantCopy.name);

// // // const { name, openingHours, categories } = restaurant;

// // // console.log(name, openingHours, categories);

// // // const {
// // //   name: restaurantName,
// // //   openingHours: hours,
// // //   categories: tags,
// // // } = restaurant;
// // // console.log(restaurantName, hours, tags);

// // // // Default values
// // // const { menu = [], starterMenu: starters = [] } = restaurant;

// // // console.log(menu, starters);

// // // // Mutating variables
// // // let a = 111;
// // // let b = 999;
// // // const obj = { a: 23, b: 7, c: 14 };

// // // ({ a, b } = obj);
// // // console.log(a, b);

// // // // nested objects
// // // const {
// // //   fri: { open: o, close: c },
// // // } = openingHours;
// // // console.log(o, c);
// // // const arr = [2, 3, 4];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// // // const [x, y, z] = arr;
// // // console.log(x, y, z);

// // // console.log(arr);

// // // let [main, , secondary] = restaurant.categories;
// // // console.log(main, secondary);

// // // // Switching variables
// // // // const temp = main;
// // // // main = secondary;
// // // // secondary = temp;
// // // // console.log(main, secondary);

// // // [main, secondary] = [secondary, main];
// // // console.log(main, secondary);

// // // // Receive 2 return value from a function
// // // const [starter, mainCourse] = restaurant.order(2, 0);

// // // console.log(starter, mainCourse);

// // // // Nested Destructuring
// // // const nested = [2, 4, [5, 6]];

// // // // const [i, , j] = nested;

// // // // console.log(i, j);
// // // const [i, , [j, k]] = nested;

// // // console.log(i, j, k);

// // // // Default values
// // // const [p = 1, q = 1, r = 1] = [8, 9];
// // // console.log(p, q, r);
