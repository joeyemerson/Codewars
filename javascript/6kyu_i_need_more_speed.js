// Write a function that will take in any array and reverse it.

// Sounds simple doesn't it?

// NOTES:

//     Array should be reversed in place! (no need to return it)
//     Usual builtins have been deactivated. Don't count on them.
//     You'll have to do it fast enough, so think about performance

function reverse(arr) {
  let temp;
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

const tests = [
  [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
  ],
  [
    ['hello', 'world', 'how', 'are', 'you', '?'],
    ['?', 'you', 'are', 'how', 'world', 'hello'],
  ],
  [
    [{ a: 1 }, { b: 2 }],
    [{ b: 2 }, { a: 1 }],
  ],
];

tests.forEach(([inp, exp]) => {
  reverse(inp);
  console.log(inp, exp);
});
