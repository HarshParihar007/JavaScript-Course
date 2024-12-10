'use strict';

// Data needed for a later exercise
//const flights =
//'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
  thu: {
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
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};
console.log('a+very+nice+string'.split('+'));
console.log('Harsh Parihar'.split(' '));
const [firstName, lastName] = 'Harsh Parihar'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('harsh parihar form ujjain');
capitalizeName('harsh parihar');

const message = 'Go to ujjain';
console.log(message.padStart(20, '+').padEnd(30, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(1234567));
console.log(maskCreditCard(551328423165186326));

const message2 = 'Harsh.... parihar... from ujjain..... \n';
console.log(message2.repeat(4));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line  ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(6);
/*const airLine = 'TAP Air Portugal';
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

const passenger = 'JOnaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

/*const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B758'[0]);

console.log(airLine.length);
console.log('B758'.length);
console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.slice(4));

const checkMiddelSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the seat');
  else console.log('You are lucky');
};
checkMiddelSeat('11B');
checkMiddelSeat('23C');
checkMiddelSeat('3E');
//////MAPS ////
/*const rest = new Map();
rest.set('name', 'Software developer');
rest.set(1, 'Ujjain mp');
console.log(rest.set(2, 'Indore mp'));

rest.set('categories', ['Italian', 'pizza', 'organic']);
set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get('true'));
////// SETS ////
/*const ordersSet = new Set(['Pizza', 'Pasta', 'Pizza', 'Burger']);
console.log(ordersSet);
console.log(new Set('Harsh'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Maggi');
ordersSet.delete('Burger');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

/*const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
}
//console.log(menu.entries());

/*console.log(3 || 'harsh');
console.log('' || 'harsh');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);*/

/*const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'burger'];
console.log(newMenu);

//cooy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Harsh';
const letter = [...str, ' ', 's.'];
console.log(letter);
console.log(...str);

const ingridents = [
  // prompt("let's  make pasta ingridents 1"),
  //prompt("let's  make pasta ingridents 2 "),
  //prompt("let's  make pasta ingridents 3"),
];
console.log(ingridents);

restaurant.orderPasta(ingridents[0], ingridents[1], ingridents[2]);
restaurant.orderPasta(...ingridents);
/*restaurant.orderDelivery({
  time: '22:30',
  address: 'Ujjain',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Ujjain',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

/*const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);*/
