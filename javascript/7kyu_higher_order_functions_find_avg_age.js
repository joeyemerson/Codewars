// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

//     The input array will always be valid and formatted as in the example above.
//     Age is represented by a number which can be any positive integer.

function getAverageAge(a) {
  return Math.round(
    a.reduce((acc, obj) => {
      return acc + obj.age;
    }, 0) / a.length
  );
}

// Can destructure the object for slightly cleaner syntax
function getAverageAge2(a) {
  return Math.round(a.reduce((acc, { age }) => acc + age, 0) / a.length);
}

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' }
];

console.log(getAverageAge2(list1), 50);

var list2 = [
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' }
];

console.log(getAverageAge2(list2), 21);
