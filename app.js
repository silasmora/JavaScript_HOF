console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// function plus(number) {
//   return function (plusNumber) {
//     return number + plusNumber;
//   };
// }

let plus = (number) => (plusNumber) => number + plusNumber;

const plus15 = plus(15);
console.log(plus15(10));

//exercise 2

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((user) => {
  console.log(user.name);
});

//exercise 3
const namesAndScores = users.map((user) => {
  return {
    name: user.name,
    score: user.score,
  };
});

console.log(namesAndScores);

//exercise 4
const filteredNames = users.filter((user) => {
  return user.isActive === true;
});

console.log(filteredNames);

//exercise 5
users.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score) {
    return 1;
  }
  return 0;
});

console.log(users);

//exercise 6
const total = users.reduce((currentTotal, users) => {
  return users.score + currentTotal;
}, 0);

console.log(total / 4);
