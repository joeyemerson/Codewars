// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// return the two oldest/oldest ages within the array of ages passed in.

const twoOldestAges = ages => {
  let oldest = 0;
  let secondOldest = 0;

  ages.forEach(age => {
    if (oldest < age) {
      secondOldest = oldest;
      oldest = age;
    } else if (secondOldest < age) {
      secondOldest = age;
    }
  });

  return [secondOldest, oldest];
};

console.log(twoOldestAges([1, 2, 10, 8]), [8, 10]);
