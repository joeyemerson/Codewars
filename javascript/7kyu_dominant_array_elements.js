// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included.

const solve = arr => {
  const dominantElements = [];
  for (i = 0; i < arr.length - 1; i++) {
    dominantElements.push(arr[i]);
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        dominantElements.pop();
        break;
      }
    }
  }
  return dominantElements.concat(arr.slice(-1));
};

console.log(solve([16, 17, 14, 3, 14, 5, 2]), [17, 14, 5, 2]);
console.log(solve([92, 52, 93, 31, 89, 87, 77, 105]), [105]);
console.log(solve([75, 47, 42, 56, 13, 55]), [75, 56, 55]);
console.log(solve([67, 54, 27, 85, 66, 88, 31, 24, 49]), [88, 49]);
console.log(solve([76, 17, 25, 36, 29]), [76, 36, 29]);
console.log(solve([104, 18, 37, 9, 36, 47, 28]), [104, 47, 28]);
