'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
/*const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
     <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
     </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcdisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);
const updateUI = function (acc) {
  displayMovements(currentAccount.movements);
  calcdisplayBalance(currentAccount);

  calcDisplaySummary(currentAccount);
};
let currentAccount;
btnLogin = addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const account = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //accounts.splice(index, 1);
  }
});*/
//console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
/*const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited ' : 'Withdraw'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);
/////////////////////////////////////////////////

/////////////////////////     SLICE METHOD //////////////
/*let arr = ['a', 'b', 'v', 'f', 'f'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
console.log([...arr]);

/////////////////// SPLICE METHOD ///////////////

arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

/////////////////////    REVERSE    //////////////
arr = ['a', 'b', 'v', 'f', 'g'];
const arr2 = ['e', 'd', 'c', 'b', 'a'];
console.log(arr2.reverse());

////////////////////    CONCAT MEANS LINK 2 ARRAYS /////////////
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);

////////////////////// JOIN  ///////////
console.log(letter.join('*'));*/

//////////////////// at method //////////////
/*const arr = [23, 56, 96, 88];
console.log(arr[1]);
console.log(arr.at(2));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-3));

console.log('Harsh'.at(0));
console.log('Harsh'.at(-1));*/

///////////////////////////////////////   FOREACH METHOD /////////////////////

/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: Cash deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: Cash Withdrew ${Math.abs(movement)}`);
  }
}
console.log('***********  NEW CODE **************');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: Cash deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: Cash Withdrew ${Math.abs(mov)}`);
  }
});*/

//// MAP /////
/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, Map) {
  console.log(`${key}: ${value}`);
});

///// SET /////
const currenciesUnique = new Set(['ABC', 'USD', 'ESB', 'USD', 'ABC']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, Map) {
  console.log(`${value}: ${value}`);
});*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*const eurToUsd = 1.1;
const totalDepositesUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositesUSD);
const firstWithDrawal = movements.find(mov => mov < 0);
console.log(movements);
//console.log(firstWithDrawal);
const lastWidrawal = movements.findLast(mov => mov < 0);
console.log(lastWidrawal);
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());*/

const owners = ['Harsh', 'Anuj', 'Udit', 'Varun'];
console.log(owners.sort());
console.log(owners);
console.log(movements.sort());
//movements.sort((a, b) => {
// if (a > b) return 1;
//if (b > a) return -1;

console.log(movements);
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposite' : 'withdraw'
);

const reversed = movements.toReversed();
console.log(reversed);
