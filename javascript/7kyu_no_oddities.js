// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// function noOdds( values )

const notOdd = n => !(n & 1);

const noOdds = values => values.filter(notOdd);

console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);
