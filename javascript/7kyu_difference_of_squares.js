// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.
// Example

// For example, when n = 10:

//     The square of the sum of the numbers is:

//     (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 55^2 = 3025

//     The sum of the squares of the numbers is:

//     1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 + 8^2 + 9^2 + 10^2 = 385

// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640

// function differenceOfSquares(n) {
//   let sum = 0;
//   let sumOfSquares = 0;
//   for (i = 1; i <= n; i++) {
//     sum += i;
//     sumOfSquares += Math.pow(i, 2);
//   }
//   return Math.pow(sum, 2) - sumOfSquares;
// }

const differenceOfSquares = n => {
  const nums = [...Array(n + 1).keys()];
  return (
    Math.pow(
      nums.reduce((a, b) => a + b),
      2
    ) - nums.reduce((a, b) => a + Math.pow(b, 2))
  );
};

console.log(differenceOfSquares(5), 170);
console.log(differenceOfSquares(10), 2640);
console.log(differenceOfSquares(100), 25164150);
