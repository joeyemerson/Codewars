// Task

// Given a positive integer as input, return the output as a string in the following format:

// Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a way that with the sum of these elements you can obtain the original number.
// Examples
// Input 	Output
// 0 	""
// 56 	"5*10+6"
// 60 	"6*10"
// 999 	"9*100+9*10+9"
// 10004 	"1*10000+4"

// Note: input >= 0

function simplify(n) {
  const res = [];
  let exp = ('' + n).length - 1;

  while (0 < n) {
    const multiplier = Math.floor(n / 10 ** exp);
    if (multiplier !== 0) {
      res.push(`${multiplier}${exp > 0 ? '*' + 10 ** exp : ''}`);
    }
    n %= 10 ** exp;
    exp--;
  }

  return res.join('+');
}

console.log(simplify(8964631), '8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1');
console.log(simplify(660), '6*100+6*10');
console.log(simplify(56), '5*10+6');
console.log(simplify(600), '6*100');
