// You have been hired by a major MP3 player manufacturer to implement a new music compression standard. In this kata you will implement the DECODER, and its companion kata deals with the ENCODER.
// Specification

// The input signal is represented as a comma-separated string of integers and tokens (sequence descriptors). Tokens must be expanded as follows.

//     number*count is expanded as number repeated count times
//     first-last is expanded as a sequence of consecutive numbers starting with first and ending with last. This is true for both ascending and descending order
//     first-last/interval is similarly expanded, as sequence starting with first, ending with last, where the numbers are separated by interval. Note that interval does NOT have a sign

// Examples

//     "1,3-5,7-11,14,15,17-20" is expanded to [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
//     "0-4/2, 5, 7-9" is expanded to [0, 2, 4, 5, 7, 8, 9]
//     "0-4/2, 5, 7-5" is expanded to [0, 2, 4, 5, 7, 6, 5]
//     "0-4/2, 5, 7-5, 5*4" is expanded to [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]

// Input: A string of comma-separated integers and tokens (sequence descriptors)
// Output: An array of integers

const isRepeatingPattern = str => /\*/.test(str);
const isRangePattern = str => /-?\d+--?\d+(?:\/\d+)?/.test(str);

const rangeDigitsRegex = /(?:(?<=-)-)?\d+/g;

function uncompress(encodedString) {
  return encodedString.split(',').reduce(decodeParts, []);
}

function decodeParts(acc, cur) {
  let decodedPart;

  if (isRepeatingPattern(cur)) {
    const [value, length] = cur.split('*').map(Number);
    decodedPart = Array.from({ length }, _ => value);
  } else if (isRangePattern(cur)) {
    const [start, end, step] = cur.match(rangeDigitsRegex).map(Number);
    decodedPart = generateRange(start, end, step || 1);
  } else {
    decodedPart = +cur;
  }

  return [...acc].concat(decodedPart);
}

function generateRange(start, end, step) {
  const length = Math.ceil((Math.abs(end - start) + 1) / step);
  return Array.from({ length }, (_, idx) => (start < end ? start + idx * step : start - idx * step));
}

const tests = [
  { input: '1,2*2,3', output: [1, 2, 2, 3] },
  { input: '1,3-5,7', output: [1, 3, 4, 5, 7] },
  { input: '1,5-3,7', output: [1, 5, 4, 3, 7] },
  { input: '1,10-6/2,7', output: [1, 10, 8, 6, 7] },
  { input: '1--5/2', output: [1, -1, -3, -5] },
  // prettier-ignore
  { input: '131,25-33/2,14,21,60,133,1--7/2,72-76,184,147,74,190,64,92-90,43,115,92', output: [131, 25, 27, 29, 31, 33, 14, 21, 60, 133, 1, -1, -3, -5, -7, 72, 73, 74, 75, 76, 184, 147, 74, 190, 64, 92, 91, 90, 43, 115, 92] },
];

const bothArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

for (testCase of tests) {
  const input = testCase.input;
  const actualOutput = uncompress(input);
  const expectedOutput = testCase.output;

  console.log('='.repeat(30));
  console.log(`${bothArraysEqual(actualOutput, expectedOutput) ? 'TEST PASSED' : 'TEST FAILED'}\n`);
  console.log(`Input: ${input}`);
  console.log(`Actual Output  : ${actualOutput}`);
  console.log(`Expected Output: ${expectedOutput}`);
}
