// Background:

// You're working in a number zoo, and it seems that one of the numbers has gone missing!

// Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to
// do it for them.

// In case the zoo loses another number, they want your program to work regardless of how many numbers there are in
// total.

// Task:
// Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any
// number including n). Return this missing number.

// Note: huge lists will be tested.
// Examples:

// [1, 3, 4]  =>  2
// [1, 2, 3]  =>  4
// [4, 2, 3]  =>  1

// return the missing number!
function findNumber(nums) {
  const lookup = new Set(nums);
  let i = 1;
  while (true) {
    if (!lookup.has(i)) return i;
    i++;
  }
}

// 12072ms

// (n * (n+1)) / 2
function findNumber(nums) {
  let actualSum = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i];
    max = Math.max(max, nums[i]);
  }

  let targetSum = (max * (max + 1)) / 2;
  return targetSum - actualSum || max + 1;
}

console.log(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
console.log(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
console.log(findNumber([1, 2, 3, 5]), 4);
console.log(findNumber([1, 3]), 2);
console.log(findNumber([2, 3, 4]), 1);
console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
console.log(findNumber([1, 2, 3]), 4);
