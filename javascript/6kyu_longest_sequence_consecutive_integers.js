// Given an array of integers, the sequences we are looking for are formed of consecutive numbers from the array, but not with necessarily consecutive indices. The order of the indices must be ascending though.

// Consecutive in this context means numbers in increasing order, that differ by at most one unit (they can be equal). 1,2,3 are consecutive, but also 1,1,1,2,3 and 10,10,10

// Example:

// For this array: [1,1,2,5,3] the possible such sequences are:

// [1], [2], [5], [3], [1, 1], [1, 2], [2, 3], [1, 1, 2], [1, 2, 3], [1, 1, 2, 3]

// The function to be implemented must return the length of the longest such sequence, in this case 4.

// For this version of the problem the test cases don't include very large arrays, so naive implementations will work.

function maxConsecutiveSequenceLength(array, startVal) {
  if (!array || array.length === 0) return 0;

  let hasStartVal = typeof startVal !== 'undefined';
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    let diff = hasStartVal ? array[i] - startVal : 0;
    if (diff === 0 || diff === 1) {
      let longestTemp = 1 + maxConsecutiveSequenceLength(array.slice(i + 1), array[i]);
      if (longestTemp > longest) {
        longest = longestTemp;
      }
    }
  }

  return longest;
}

console.log(maxConsecutiveSequenceLength([1, 1, 2, 5, 3]), 4);
console.log(maxConsecutiveSequenceLength([3, 2, 1]), 1);
console.log(maxConsecutiveSequenceLength([-4, -4, -4, -3]), 4);
console.log(maxConsecutiveSequenceLength([6, 1, 9, 4, 2, 6, 0, 7, 8]), 4);
console.log(maxConsecutiveSequenceLength([3, 2, 1, 2, 3, 3, 2, 2, 2, 3, 4]), 7); // [2, 2, 2, 2, 2, 3, 4] is valid
console.log(maxConsecutiveSequenceLength([10]), 1);
console.log(maxConsecutiveSequenceLength([]), 0);
console.log(maxConsecutiveSequenceLength([7, 4, 9, 7, 8, 4, 5, 9, 3, 7]), 4);
console.log(maxConsecutiveSequenceLength([8, 8, 7, 4, 6, 2, 0, 8, 5, 7]), 3);
