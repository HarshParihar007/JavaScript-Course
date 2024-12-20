'use strict';
/*const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const harsh = new Person('Harsh', 2002);
console.log(harsh);

const arsh = new Person('Arsh', 2000);
const mango = new Person('mango', 2010);
console.log(arsh, mango);

console.log(harsh instanceof Person);

////////// PROTOTYPE ///////////
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2029 - this.birthYear);
};
mango.calcAge();

console.log(harsh.__proto__);
console.log(harsh.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(harsh));

console.log(harsh.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 5, 6, 8, 7, 9, 2, 6, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => +1);*/

///////////////////////////          CHALLENGE 1              ////////////////

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new Car('BMW', 120);
const audi = new Car('AUDi', 100);
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.brake();*/

//////////////////////////            CHALLENGE 2   ///////////////////
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);*/

///////////////////////  Classes ///////////

// class expression
//const Person = class {};

// class decleration
/*class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2040 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2040 - this.birthYear;
  }
  set Fullname(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  static hey() {
    console.log('Hey bro');
    console.log(this);
  }
}
const harsh = new PersonCl('Harsh Parihar', 2000);
console.log(harsh);
harsh.calcAge();
console.log(harsh.age);

console.log(harsh.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
harsh.greet();

/////////  SETTER and GETTER ///////////////

/*const account = {
  owner: 'Harsh',
  movements: [200, 300, 400, 500],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);*/

///////////////  ONJECT.CREAT  ////////////

/*const PersonProto = {
  calcAge() {
    console.log(2040 - birthYear);
  },
};

const apple = Object.create(PersonProto);
console.log(apple);
apple.name = 'Apple';
apple.birthYear = 2002;
apple.calcAge();*/

///////////////////   Inheritance between classes : constructor function  ///////////////
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};
const mike = new Student('Mike', 2002, 'science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);*/

//////////////////////////////    CHALLENGE 3  /////////////////////////////////
/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.brake -= 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTO) {
  this.charge = chargeTO;
};
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);*/

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];

  constructor(owner, currency, pin, movement) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //this.movement = [];
    //this.locale = navigator.language;
    console.log(`Thanks for opening the account: ${owner}`);
  }
  deposite(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Harsh', 'IND', 1111, []);
acc1.deposite(300);
acc1.withdraw(100);
acc1.movements = [];
console.log(acc1);
console.log(acc1, movements);
