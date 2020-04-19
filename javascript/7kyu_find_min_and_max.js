// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

function getMinMax(arr) {
  let min = Infinity;
  let max = -Infinity;

  arr.forEach(n => {
    if (n < min) min = n;
    if (max < n) max = n;
  });

  return [min, max];
}

console.log(getMinMax([1]), [1, 1]);
console.log(getMinMax([1, 2]), [1, 2]);
console.log(getMinMax([2, 1]), [1, 2]);
