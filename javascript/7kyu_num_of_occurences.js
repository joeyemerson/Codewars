// Write a function that returns the number of occurrences of an element in an array.
// Examples

// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

Array.prototype.numberOfOccurrences = function(target) {
  return this.reduce((acc, item) => acc + (item === target), 0);
};

const arr = [4, 0, 4];
console.log(arr.numberOfOccurrences(4), 2);
