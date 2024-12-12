'use strict';

/*const bookings = [];

const creatBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //numPassengers = numPassengers || 1;
  //price = price || 200;
  const booking = { flightNum, numPassengers, price };

  console.log(booking);
  bookings.push(booking);
};
creatBooking('L123');
creatBooking('L456', 2, 889);
creatBooking('L586', 5);*/

/*const flight = 'L555';
const harsh = {
  name: 'Harsh Parihar',
  passport: 12584155,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'L555';
  passenger.name = 'Mr.' + passenger.name;

  if ((passenger.passport = 12584155)) {
    alert('Ckecked In');
  } else {
    alert('wrong passport');
  }
};
/*checkIn(flight, harsh);
console.log(flight);
console.log(harsh);

const flightName = flight;
const passenger = harsh;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(harsh);
checkIn(flight, harsh);*/

/*const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('This is best ', upperFirstWord);
transformer('This is best ', oneWord);

const high5 = function () {
  console.log('👌');
};
document.body.addEventListener('click', high5);
['Harsh', 'Parihar', 'Ujjain'].forEach(high5);*/

/*const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Harsh');
greeterHey('Parihar');
greet('Hello')('Parihar');
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Harsh');*/

/*const Indigo = {
  airline: 'Indigo',
  code: 'KKJ',
  booking: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code} ${flightNum}`
    );
    this.booking.push({ flight: `${this.code} ${flightNum}`, name });
  },
};

Indigo.book(123, 'Harsh parihar');
Indigo.book(568, 'Harsh rathore');
console.log(Indigo);

const airJet = {
  name: 'airJet',
  code: 'ESD',
  booking: [],
};

const book = Indigo.book;
book.call(airJet, 25, 'Arsh rathore');
console.log(airJet);

book.call(Indigo, 569, 'Anuj Suhane');
console.log(Indigo);

const airIndia = {
  airline: 'AirIndia',
  code: 'Lkkj',
  booking: [],
};
book.call(airIndia, 589, 'Arjun');

const flightData = [589, 'Arjun'];
book.apply(airIndia, flightData);
console.log(airIndia);

book.call(airIndia, ...flightData);

const bookEW = book.bind(Indigo);
const bookNW = book.bind(airJet);
const boohJQ = book.bind(airIndia);
bookEW(23, 'Arjun vani');

const bookEW152 = book.bind(Indigo, 12345);
bookEW152('Harsh');
bookEW152('Parihar');

Indigo.plane = 300;
Indigo.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//Indigo.buyPlane();
document.querySelector('.buy').addEventListener('click', Indigo.buyPlane);
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));*/

/*const runOnce = function () {
  console.log('This will run ');
};
runOnce();
(function () {
  console.log('This also run');
})();

(() => console.log('This will so run'))();*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
