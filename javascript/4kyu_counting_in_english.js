// Counting numbers in English

// Please create a function which takes a number and returns the name of the number in English as a lowercase string.
// The function should support at least the numbers ±2 Quadrillion (±2,000,000,000,000,000) as well as positive and
// negative infinity.

// This is a harder kata than it might sound! Be sure to read the requirements thoroughly.
// Rules

//     positive integers - Print number in english.
//         Numbers between 20 and 99 use hyphens. e.g. forty-five
//         Use a space to separate all other words. e.g. one hundred twenty-three
//         The word 'and' is used to separate the tens space from the hundreds space in each period
//             111 -> Good: "one hundred and eleven" - Bad: "one hundred eleven"
//             1,101,101 Good: "one million one hundred and one thousand one hundred and one" - Bad: "one million one
//             hundred one thousand one hundred one"
//         ...also the word 'and' is used to separate the tens and ones space from the lowest number the left of the
//            tens place for numbers over 1000.
//             1,001 -> Good: "one thousand and one" - Bad: "one thousand one"
//             1,000,001 -> Good: "one million and one" - Bad: "one million one"
//             1,000,011 -> Good: "one million and eleven" - Bad: "one million eleven"
//             1,000,111 -> Good: "one million one hundred and eleven" - Bad: "one million and one hundred and eleven"
//             1,011,011 -> Good: "one million eleven thousand and eleven" Bad: "one million and eleven thousand and
//             eleven"
//         Support integers up to ±2 Quadrillion.
//         Consult this list for large number names. Always use the 'short scale' popular in the USA.
//     zero/nil - Print 'zero'.
//     negative integers - Print 'negative' before the number
//     decimal numbers - Print the number to the left of the decimal then 'point' then the numbers to the right of the
//     decimal each digit at a time. (see example)
//         Support at least 5 decimal places.
//     non-numbers - Strings that evaluate to numbers should be converted to numbers. NaN values must throw an error.
//     Positive / Negative infinity - Print 'infinity' or 'negative infinity'

// Example

// numberToEnglish(1); // -> "one"
// numberToEnglish(11); // -> "eleven"
// numberToEnglish(1.23); // -> "one point two three"
// numberToEnglish(-45); // -> "negative forty-five"
// numberToEnglish(100023999); // -> "one hundred million twenty-three thousand nine hundred and ninety-nine"

// Large number names

//     Million 10^6
//     Billion 10^9
//     Trillion 10^12
//     Quadrillion 10^15

// prettier-ignore
const map = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',
  12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
  17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty',
  40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
};

function numberToEnglish(n) {
  if (isNaN((n = +n))) throw 'Input must be a number';

  let english = [];
  let decimalPlaces;
  let isNegative = n < 0;

  if (isNegative) n = -n;

  if (n === Infinity) return `${isNegative ? 'negative ' : ''}infinity`;

  if (Math.floor(n) !== n) {
    decimalPlaces = ('' + n)
      .split('.')[1]
      .split('')
      .map(digit => map[digit]);
    n = Math.floor(n);
  }

  if (n === 0) english.push('zero');

  if (n >= 1000000000000000) {
    english.push(`${map[Math.floor(n / 1000000000000000)]} quadrillion`);
    n = n % 1000000000000000;
  }
  if (n >= 1000000000000) {
    english.push(`${hundredsTensOnes(Math.floor(n / 1000000000000))} trillion`);
    n = n % 1000000000000;
  }
  if (n >= 1000000000) {
    english.push(`${hundredsTensOnes(Math.floor(n / 1000000000))} billion`);
    n = n % 1000000000;
  }
  if (n >= 1000000) {
    english.push(`${hundredsTensOnes(Math.floor(n / 1000000))} million`);
    n = n % 1000000;
  }
  if (n >= 1000) {
    english.push(`${hundredsTensOnes(Math.floor(n / 1000))} thousand`);
    n = n % 1000;
  }
  if (n && n < 100 && english.length) english.push('and');

  if (n) english.push(hundredsTensOnes(n));

  if (decimalPlaces) {
    english.push('point');
    english = english.concat(decimalPlaces);
  }

  return `${isNegative ? 'negative ' : ''}${english.join(' ')}`;
}

function hundredsTensOnes(n) {
  let english = '';
  if (n >= 100) {
    english += `${map[Math.floor(n / 100)]} hundred`;
    n = n % 100;
    if (n) {
      english += ' and ';
    }
  }
  if (n >= 20) {
    english += `${map[Math.floor(n / 10) * 10]}`;
    if (n % 10) {
      english += '-' + map[n % 10];
    }
    n = n % 10;
  } else if (n > 0) {
    english += map[n];
  }
  return english;
}

const tests = [
  { input: 1, expectedOutput: 'one' },
  { input: 5, expectedOutput: 'five' },
  { input: 10, expectedOutput: 'ten' },
  { input: 18, expectedOutput: 'eighteen' },
  { input: 99, expectedOutput: 'ninety-nine' },
  { input: 100, expectedOutput: 'one hundred' },
  { input: 123, expectedOutput: 'one hundred and twenty-three' },
  { input: 2001, expectedOutput: 'two thousand and one' },
  {
    input: 1234567899,
    expectedOutput:
      'one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine',
  },
  { input: 3.14159, expectedOutput: 'three point one four one five nine' },
  { input: 0.0001, expectedOutput: 'zero point zero zero zero one' },
  { input: -50, expectedOutput: 'negative fifty' },
  { input: 0, expectedOutput: 'zero' },
  { input: 2000000000000000, expectedOutput: 'two quadrillion' },
  { input: -Infinity, expectedOutput: 'negative infinity' },
  { input: '123456', expectedOutput: 'one hundred and twenty-three thousand four hundred and fifty-six' },
  { input: 'hello', expectedOutput: 'Input must be a number' },
  { input: NaN, expectedOutput: 'Input must be a number' },
];

for (const test of tests) {
  const { input, expectedOutput } = test;
  let actualOutput;

  try {
    actualOutput = numberToEnglish(input);
  } catch (e) {
    actualOutput = e;
  }

  console.log('='.repeat(30));
  console.log(`${actualOutput === expectedOutput ? 'TEST PASSED' : 'TEST FAILED'}\n`);
  console.log(`Input: ${input}`);
  console.log(`Actual Output  : ${actualOutput}`);
  console.log(`Expected Output: ${expectedOutput}`);
}
