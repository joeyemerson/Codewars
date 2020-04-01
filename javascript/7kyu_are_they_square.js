// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined. You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]);
//returns true

// isSquare([3, 4, 7, 9]);
//returns false

// isSquare([]);
//returns undefined

const isSquare = arr => {
  for (const n of arr.map(Math.sqrt)) {
    if (!Number.isInteger(n)) return false;
  }
  return arr.length ? true : undefined;
};

console.log(isSquare([1, 4, 9, 16, 25, 36]), true);
console.log(isSquare([1, 2, 3, 4, 5, 6]), false);
console.log(isSquare([]), undefined);
console.log(isSquare([1, 2, 4, 15]), false);
