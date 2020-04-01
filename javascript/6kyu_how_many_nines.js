// Ask a mathematician: "What proportion of natural numbers contain at least one digit 9 somewhere in their decimal representation?"

// You might get the answer "Almost all of them", or "100%".

// Clearly though, not all whole numbers contain a 9.

// In this kata we ask the question: "How many Integers in the range [0..n] contain at least one 9 in their decimal representation?"

// In other words, write the function:

// nines :: BigInt => BigInt

// Where, for example:

// nines(1n)  = 0n
// nines(10n) = 1n     // 9
// nines(90n) = 10n    // 9, 19, 29, 39, 49, 59, 69, 79, 89, 90

// When designing your solution keep in mind that your function will be tested against some large numbers (up to 10^38)

// function nines(n) {
//   let exp = BigInt(('' + n).length) - 1n;
//   let nearestPowerOfTen = 10n ** exp;
//   let total = nearestPowerOfTen - 9n ** exp;

//   return total;
// }

function nines(n) {
  if (n < 10n) return n === 9n ? 1n : 0n;
  const str = '' + n;
  const len = BigInt(str.length - 1);
  const head = BigInt(str[0]);
  const tail = BigInt(str.slice(1));
  const recur = head === 9n ? tail + 1n : nines(tail);
  const f = n => (n === 1n ? 1n : 10n ** --n + 9n * f(n));
  return head * f(len) + recur;
}

console.log(nines(1n), 0n);
console.log(nines(10n), 1n);
console.log(nines(100n), 19n);
console.log(nines(1000n), 271n);
console.log(nines(3950n), 1035n);
console.log(nines(4000n));
console.log(nines(1000n));
console.log(nines(10000n));
console.log(nines(100000n));
console.log(nines(1000000n));
console.log(nines(10000000n));
