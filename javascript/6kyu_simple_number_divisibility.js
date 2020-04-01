// In this Kata, you will be given a number and your task will be to rearrange the number so that it is divisible by 25, but without leading zeros. Return the minimum number of digit moves that are needed to make this possible. If impossible, return -1 ( Nothing in Haskell ).

// For example:

// solve(521) = 3 because:
//     a) Move the digit '1' to the front: 521 -> 512 -> 152. The digit '1' is moved two times.
//     b) Move '5' to the end: 152 -> 125. The digit '5' is moved one time, so total movement = 3.
// Of all the ways to accomplish this, the least digit moves = 3.

// solve(100) = 0. Number already divisible by 25.
// solve(1) = -1. Not possible to make number divisible by 25.

// solve(0) is not tested.

function solve(n) {
  if (n < 25) return -1;

  const suffixes = new Set(['00', '25', '52', '50', '05', '75', '57']);
  n = '' + n;

  if (suffixes.has(n)) return 0;

  let gap = 1;
  for (let i = n.length - 1; i - gap >= 0; i--) {
    for (let j = i; j - gap >= 0; j--) {
      if (suffixes.has(n[j] + n[j - gap])) {
        return n.length * 2 - 1 - j - gap;
      } else if (suffixes.has(n[j - gap] + j)) {
        return n.length * 2 - 3 - j - gap;
      }
    }
    gap += 1;
  }
  return -1;
}

console.log(solve(521), 3);
console.log(solve(100), 0);
console.log(solve(1), -1);
console.log(solve(50), 0); // got 1
console.log(solve(64808859507), 2); // got 11?
