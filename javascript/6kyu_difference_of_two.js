// The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

// The result should be sorted in ascending order.

// The input will consist of unique values. The order of the integers in the input collection should not matter.
// Examples

// [1, 2, 3, 4]      -->  [[1, 3], [2, 4]]
// [4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
// [1, 23, 3, 4, 7]  -->  [[1, 3]]
// [4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]

function twosDifference(arr) {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === 2) {
        pairs.push([Math.min(arr[i], arr[j]), Math.max(arr[i], arr[j])]);
      }
    }
  }

  return pairs.sort((a, b) => a[0] - b[0]);
}

console.log(twosDifference([1, 2, 3, 4]), [
  [1, 3],
  [2, 4],
]);

console.log(twosDifference([1, 3, 4, 6]), [
  [1, 3],
  [4, 6],
]);

console.log(twosDifference([1, 23, 3, 4, 7]), [[1, 3]]);

console.log(twosDifference([4, 3, 1, 5, 6]), [
  [1, 3],
  [3, 5],
  [4, 6],
]);
