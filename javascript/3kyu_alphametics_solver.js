// Alphametics is a type of cryptarithm in which a set of words is written down in the form of a long addition sum or some other mathematical problem. The objective is to replace the letters of the alphabet with decimal digits to make a valid arithmetic sum.

// For this kata, your objective is to write a function that accepts an alphametic equation in the form of a single-line string and returns a valid arithmetic equation in the form of a single-line string.
// Test Examples

// INPUT:    "SEND + MORE = MONEY"
// SOLUTION: "9567 + 1085 = 10652"

// INPUT:    "ELEVEN + NINE + FIVE + FIVE = THIRTY"
// SOLUTION: "797275 + 5057 + 4027 + 4027 = 810386"

// Some puzzles may have multiple valid solutions; your function only needs to return one

// BIG + CAT = LION
// 403 + 679 = 1082
// 326 + 954 = 1280
// 304 + 758 = 1062
// ...etc.

// Technical Details

//     All alphabetic letters in the input will be uppercase
//     Each unique letter may only be assigned to one unique digit
//     As a corollary to the above, there will be a maximum of 10 unique letters in any given test
//     No leading zeroes
//     The equations will only deal with addition with multiple summands on the left side and one term on the right side
//     The number of summands will range between 2 and 7, inclusive
//     The length of each summand will range from 2 to 8 characters, inclusive
//     All test cases will be valid and will have one or more possible solutions
//     Full Test Suite: 15 fixed tests, 21 random tests for Python and Ruby / 18 random tests for JavaScript / 28
//     random tests for Go and C# / 136 random tests for Java
//     Optimize your code -- a naive, brute-force algorithm may time out before the first test completes
//     For JavaScript, module and require are disabled, and most prototypes are frozen (except Array and Function)

function alphametics(puzzle) {
  let [summands, letters] = getParts(puzzle);
  let sum = summands.pop();
  let map = {};

  letters = Array.from({ length: 10 - letters.length }).concat(letters);

  for (const permutation of permute(letters)) {
    map = generateValueMap(permutation);
    if (isValidPuzzle(summands, sum, map)) break;
  }

  summands = summands.map(word => word.replace(/[A-Z]/g, c => map[c]));
  sum = sum.replace(/[A-Z]/g, c => map[c]);

  return `${summands.join(' + ')} = ${sum}`;
}

function getParts(puzzle) {
  const parts = puzzle.replace('=', '+').split(' + ');
  const letters = new Set(puzzle.replace(/[^A-Z]/g, ''));
  return [parts, Array.from(letters)];
}

function generateValueMap(letters) {
  const res = {};
  letters.forEach((l, i) => (res[l] = i));
  return res;
}

function* permute(permutation) {
  let length = permutation.length,
    c = Array(length).fill(0),
    i = 1,
    k,
    p;

  yield permutation.slice();
  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      yield permutation.slice();
    } else {
      c[i] = 0;
      ++i;
    }
  }
}

function isValidPuzzle(summands, sumString, map) {
  if (map[sumString[0]] === 0) return false;

  let compareSum = 0;
  let sum = +convertAlphaToNumber(sumString, map);
  let curVal;

  for (summand of summands) {
    if (map[summand[0]] === 0) return false;
    curVal = convertAlphaToNumber(summand, map);
    compareSum += +curVal;
  }

  return compareSum === sum;
}

function convertAlphaToNumber(str, map) {
  let res = '';
  for (const char of str) res += map[char];
  return res;
}

const tests = [
  ['SEND + MORE = MONEY', '9567 + 1085 = 10652'],
  ['ZEROES + ONES = BINARY', '698392 + 3192 = 701584'],
  ['COUPLE + COUPLE = QUARTET', '653924 + 653924 = 1307848'],
  ['DO + YOU + FEEL = LUCKY', '57 + 870 + 9441 = 10368'],
  ['ELEVEN + NINE + FIVE + FIVE = THIRTY', '797275 + 5057 + 4027 + 4027 = 810386'],
];

tests.forEach(([input, expectedOutput]) => {
  const actualOuput = alphametics(input);
  console.log('='.repeat(30));
  console.log(`${actualOuput === expectedOutput ? 'TEST PASSED' : 'TEST FAILED'}\n`);
  console.log(`Input: ${input}`);
  console.log(`Actual Output  : ${actualOuput}`);
  console.log(`Expected Output: ${expectedOutput}`);
});
