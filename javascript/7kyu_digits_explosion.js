// Given a string made of digits [0-9], return a string where each digit is repeated a number
// of times equals to its value.

// Digits.Explode("312") = "333122"
// Digits.Explode("102269") = "12222666666999999999"

function explode(str) {
  let res = '';

  for (const digit of str) {
    res += digit.repeat(+digit);
  }

  return res;
}

const tests = [
  ['312', '333122'],
  ['102269', '12222666666999999999'],
  ['0', ''],
  ['000', ''],
  ['123', '122333'],
];

for (let i = 0; i < tests.length; i++) {
  console.log(explode(tests[i][0]), tests[i][1]);
}
