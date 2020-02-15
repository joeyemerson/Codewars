// Given an input of an array of digits num, return the array with each digit incremented by its position in the array. For example, the first digit will be incremented by 1, the second digit by 2 etc. Make sure to start counting your positions from 1 and not 0.

// incrementer({1,2,3}) => {2,4,6}

// Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned

// incrementer({4,6,9,1,3}) => {5,8,2,5,8}

//   - 9 + 3 (position of 9 in array) = 12
//   - Only its last digit 2 should be returned

// Lastly, return {} if your array is empty! Arrays will only contain numbers so don't worry about checking that.

const incrementer = nums => {
  const incrementedNums = [];
  let i = 1;
  for (const n of nums) {
    incrementedNums.push((n + i) % 10);
    i++;
  }
  return incrementedNums;
};

console.log(incrementer([]), []);
console.log(incrementer([1, 2, 3]), [2, 4, 6]);
console.log(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]);
console.log(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]);
console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]);
