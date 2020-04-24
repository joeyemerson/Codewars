// We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can
// be. The sum of the parts should be the original value, but each part should be an integer, and they should be as
// close as possible.

// Example code:

// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]

// Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the
// parts, there is only one valid solution for each input to your function!

// (Also, there is no reason to test for edge cases: the input to your function will always be valid for this kata.)

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
function splitInteger(num, parts) {
  const res = [];
  const lowDivisor = Math.floor(num / parts);
  const highDivisor = Math.ceil(num / parts);

  while (0 < num) {
    let partsRemaining = parts - res.length;
    if (num / highDivisor === partsRemaining) {
      res.push(highDivisor);
      num -= highDivisor;
    } else {
      res.push(lowDivisor);
      num -= lowDivisor;
    }
  }

  return res;
}

function splitInteger(num, parts) {
  const remainder = num % parts;
  const int = Math.floor(num / parts);

  return [...new Array(parts - remainder).fill(int), ...new Array(remainder).fill(int + 1)];
}

console.log(splitInteger(10, 1).sort(), [10]);
console.log(splitInteger(2, 2).sort(), [1, 1]);
console.log(splitInteger(20, 5).sort(), [4, 4, 4, 4, 4]);
console.log(splitInteger(20, 6), [3, 3, 3, 3, 4, 4]);
