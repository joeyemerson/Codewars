// Given a string of numbers and a number n, peel away the pairs of digits that add up to n (starting from index 0). The numbers in the pair don't have to be adjacent to each other, but they should be paired with the closest digit to the right of them that sums to n.

// Return the new string with those pairs removed.

// peelPairs('14642', 3) => '464'
// peelPairs('732374', 6) => '77'
// peelPairs('245638363', 10) => '53363'

function peelPairs(str, n) {
  const nums = [...str];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (+nums[i] + +nums[j] === n) {
        // set to string character instead of null or undefined to prevent
        // false positives in the if statement
        nums[i] = 'x';
        nums[j] = 'x';
        break;
      }
    }
  }

  return nums.filter((i) => i !== 'x').join('');
}

console.log(peelPairs('14642', 3), '464');
console.log(peelPairs('732374', 6), '77');
console.log(peelPairs('245638363', 10), '53363');
