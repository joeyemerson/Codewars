// Consider the leftmost and righmost appearances of the same value in an array. We'll say that the "span" is the number of elements between the the same elements (two inclusive). Return the largest span found in the given array.

// [1, 2, 1, 1, 3, 4, 5, 6, 7, 8, 8] → 4  // span is (1, 2, 1, 1)
// [1, 4, 2, 1, 4, 1, 4, 9, 7, 7, 7] → 6  // span is (4, 2, 1, 4, 1, 4)
// [1, 4, 6, 1, 4, 4, 4, 8 ,6, 2, 3] → 7  // span is (6, 1, 4, 4, 4, 8, 6)

// P.S. Input array includes positive integers, array's length > 10.

const maxSpan = a => {
  let result = 0;
  for (i = 0; i < a.length; i++) {
    let curSpan = 1;
    for (j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        curSpan = j - i + 1;
      }
    }
    if (result < curSpan) {
      result = curSpan;
    }
  }
  return result;
};

console.log(maxSpan([1, 2, 1, 1, 3]), 4);
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4]), 6);
console.log(maxSpan([1, 4, 6, 1, 4, 4, 4, 8, 6]), 7);
