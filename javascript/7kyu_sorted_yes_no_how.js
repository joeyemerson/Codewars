// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(arr) {
  const ascending = arr[0] < arr[1] ? true : false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (ascending && arr[i] > arr[i + 1]) return 'no';
    if (!ascending && arr[i] < arr[i + 1]) return 'no';
  }

  return `yes, ${ascending ? 'ascending' : 'descending'}`;
}

console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');
