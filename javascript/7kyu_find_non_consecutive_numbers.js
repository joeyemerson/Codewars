// Your task is to find all the elements of an array that are non consecutive.

// A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

// Create a function named allNonConsecutive

// E.g., if we have an array [1,2,3,4,6,7,8,10] then 6 and 10 are non-consecutive.

// You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

// E.g., for the above array the result should be:

// [
//   {i: 4, n:6},
//   {i: 7, n:10}
// ]

// If the whole array is consecutive or has one element then return an empty array.

// The array elements will all be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive.

// If you like this kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

function allNonConsecutive(arr) {
  const res = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      res.push({ i, n: arr[i] });
    }
  }
  return res;
}

// More modern solution...
const allNonConsecutive2 = a => {
  const r = [];
  a.forEach((n, i) => {
    if (n !== a[i - 1] + 1 && i) {
      r.push({ i, n });
    }
  });
  return r;
};

// Using reduce
const allNonConsecutive3 = a => {
  return a.reduce((xs, n, i) => (n !== a[i - 1] + 1 && i ? [...xs, { i, n }] : xs), []);
};

console.log(allNonConsecutive3([1, 2, 3, 4, 6, 7, 8, 10]), [
  { i: 4, n: 6 },
  { i: 7, n: 10 }
]);
