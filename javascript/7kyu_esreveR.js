// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

const reverse = arr => {
  const res = arr.slice();
  for (let i = 0, j = res.length - 1; i < j; i++, j--) {
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
};

const reverse2 = arr => {
  const res = [];
  for (let i = arr.length - 1; 0 <= i; i--) {
    res.push(arr[i]);
  }
  return res;
};

const reverse3 = arr => arr.map((_, i, a) => a[a.length - 1 - i]);

console.log(reverse2([1, 2, 3]), [3, 2, 1]);
console.log(reverse2([1, null, 14, 'two']), ['two', 14, null, 1]);
