/*'use strict';

let hasLicense = false;
const passTest = true;

if (passTest) hasLicense = true;
if (hasLicense) console.log('i can drive');*/


/*function logger() {
    console.log('My name is Harsh');

}
logger();
logger();

function fruitsJucier(mango, apple) {
    console.log(mango, apple);
    const juice = 'juice with $ {mango} mango and $ {apple} apple';
    return juice;
}

const mangoJuice = fruitsJucier(6, 0);
console.log(mangoJuice);*/


/*function calcAge1(birthYear) {
    return 2020 - birthYear;
}
const age1 = calcAge1(1992);
console.log(age1);*/

/*function calcAge1(birthYear) {
    return 2020 - birthYear;
}

birthYear => 2020 - birthYear;*/


/*const friends = ['Harsh', 'Roy', 'Arjun', 'Anuj'];
console.log(friends);

const years = new Array(2002, 1992, 1457, 2005);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = 'ary';
console.log(friends);*/


/*const friends = ['Harsh', 'Roy', 'Arjun', 'Anuj'];
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

//friends.unshift('john')
friends.pop();
console.log(friends);*/

/*const harsh = {
    firstName: 'Harsh',
    lastName: 'Parihar',
    age: 2002 - 10,
    friends: ['harsh', 'udit', 'anuj']

};
console.log(harsh);
console.log(harsh.lastName);*/


/*const harsh = [
    'Harsh',
    'Parihar',
    2002 - 10,
    ['harsh', 'udit', 'anuj'],
    true
];

for (let i = harsh.length - 1; i >= 0; i--) {
    console.log(i, harsh[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log('------ start exercise ${exercise}.')
};*/

/*for (let rep = 1; rep < 6; rep++) {
    console.log("lifting weight ${rep}.")
}

let rep = 1;
while (rep <= 10) {
    console.log('WHILE: lifting the weight ${rep}');
    rep++;
}*/

/*let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log('you rolled a ${dice}');
}

