// Task:
// Your function should return a valid regular expression. This is a pattern which is normally used to match parts of a
// string. In this case will be used to check if all the characters given in the input appear in a string.

// Input

// Non empty string of unique alphabet characters upper and lower case.
// Output

// Regular expression pattern string.
// Examples

// Your function should return a string.

// function regexContainsAll(str) {
//   return "abc";
// }

// That regex pattern will be tested like this.

// const abc = "abc";
// const pattern = regexContainsAll(abc);
// const str = "zzzaaacccbbbzzz";
// new RegExp(pattern).test(str);  // -> true

function regexContainsAll(str) {
  return str.replace(/./g, '(?=.*$&)'); // $& is the match => (?=.*a)(?=.*b)(?=.*c)
}

const abc = 'abc';
const pattern = regexContainsAll(abc);
console.log(new RegExp(pattern).test('bca'), true);
console.log(new RegExp(pattern).test('baczzz'), true);
console.log(new RegExp(pattern).test('ac'), false);
console.log(new RegExp(pattern).test('bc'), false);
console.log(new RegExp(pattern).test('cb'), false);
