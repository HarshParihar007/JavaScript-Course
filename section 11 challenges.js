'use strict';
/////////////////////////////////////             CHALLENGE 1  ///////////////////
/*const checkDogs = function (dogJulia, dogKate) {
  const dogJuliaCorrected = dogJulia.slice();
  dogJuliaCorrected.splice(0, 1);
  dogJuliaCorrected.splice(-2);
  console.log(dogJuliaCorrected);
  const dogs = dogJuliaCorrected.concat(dogKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} year old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy `);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);*/

///////////////////////////////////// CHALLENGE 2 ///////////////////

/*const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adult = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adult);

  const average = adult.reduce((acc, age) => acc + age, 0) / adult.length;
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);*/

/////////////////////////////////    CHALLLENGE 3 ////////////////////

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adult = humanAges.filter(age => age >= 18);

  const average = adult.reduce(
    (acc, age, i, arr) => acc + age / adult.length,
    0
  );
  return average;
};

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / adult.length, 0);
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
