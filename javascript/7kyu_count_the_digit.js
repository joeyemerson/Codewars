// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0
// and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function
// taking n and d as parameters and returning this count.

// #Examples:

// n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1):
// the numbers of interest are
// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
// so there are 11 digits `1` for the squares of numbers between 0 and 25.

// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  let count = 0;
  d = '' + d;
  // square all numbers (k) between 0 and n (inclusive)
  const squares = Array.from({ length: n + 1 }, (_, i) => Math.pow(i, 2));
  // count the number of digits (d) used in the writing of k**2
  squares.forEach(square => (count += digitCount('' + square, d)));

  return count;
}

function digitCount(number, targetDigit) {
  let count = 0;
  for (digit of number) {
    if (digit === targetDigit) count++;
  }
  return count;
}

function nbDig2(n, d) {
  let squares = '';
  for (let i = 0; i <= n; i++) {
    squares += Math.pow(i, 2);
  }
  return squares.split(d).length - 1;
}

// console.log(nbDig(5750, 0), 4700);
// console.log(nbDig(11011, 2), 9481);
// console.log(nbDig(12224, 8), 7733);
// console.log(nbDig(11549, 1), 11905);

console.time('nbDig');
nbDig(5750, 0), 4700;
nbDig(11011, 2), 9481;
nbDig(12224, 8), 7733;
nbDig(11549, 1), 11905;
console.timeEnd('nbDig');

console.time('nbDig2');
nbDig2(5750, 0), 4700;
nbDig2(11011, 2), 9481;
nbDig2(12224, 8), 7733;
nbDig2(11549, 1), 11905;
console.timeEnd('nbDig2');
