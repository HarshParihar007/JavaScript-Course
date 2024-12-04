'use strict';

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName},you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millinior = true;
      const firstName = 'Parihar';
      output = 'New output';
      const str = `oh your are millinior, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millinior);
    console.log(output);
  }
  printAge();

  return age;
}
const firstName = 'Harsh';
calcAge(1991);*/

/*console.log(me);
//console.log(year);
//console.log(job);

var me = 'Harsh';
let job = 'Developer';
const year = 2024;

console.log(addDecl(2, 3));

console.log(addArrow);
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
console.log(undefined);
if (!numProduct) deletShoppingCart();
var numProduct = 10;

function deletShoppingCart() {
  console.log('Add products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);*/

/*console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(19);

const Harsh = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
Harsh.calcAge();
const matilda = {
  year: 2017,
};

matilda.calcAge = Harsh.calcAge;
matilda.calcAge();

const f = jonas.calcAge;*/

/*const Harsh = {
  firstName: 'Harsh',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    const self = this;
    const isMillinior = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillinior();
  },
  great: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
Harsh.great();
Harsh.calcAge();*/

/*let age = 22;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Harsh',
  age: 23,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);*/

let lastName = 'Parihar';
let oldLastName = lastName;
lastName = 'Harsh';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Harsh',
  age: 25,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Harsh';
console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Harsh',
  age: 25,
  family: ['Anuj', 'Udit'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Harsh';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jhon');

console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);
