// ###Task:

// You have to write a function pattern which creates the following pattern (see examples) up to the desired number of rows.

//     If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

//     If any even number is passed as argument then the pattern should last upto the largest odd number which is smaller than the passed even number.

// ###Examples:

// pattern(9):

// 1
// 333
// 55555
// 7777777
// 999999999

// pattern(6):

// 1
// 333
// 55555

// Note: There are no spaces in the pattern

// Hint: Use \n in string to jump to next line

const pattern = n => {
  if (n < 1) return '';

  const res = [];

  for (let i = 1; i <= n; i += 2) {
    res.push(`${i.toString().repeat(i)}`);
  }

  return res.join('\n');
};

// Probably not best practice, but fun!
const pattern2 = n =>
  n < 1 ? '' : Array.from({ length: Math.ceil(n / 2) }, (_, i) => `${i * 2 + 1}`.repeat(i * 2 + 1)).join('\n');

console.log(pattern(4) === '1\n333');
console.log(pattern(1) === '1');
console.log(pattern(5) === '1\n333\n55555');
console.log(pattern(0) === '');
console.log(pattern(-25) === '');
