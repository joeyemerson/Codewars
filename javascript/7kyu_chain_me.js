// Write a generic function chainer

// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of
// symbols for ruby).

// The input for each function is the output of the previous function (except the first function, which takes the
// starting value as it's input). Return the final value after execution is complete.

const chain = (input, fs) => fs.reduce((a, f) => (a = f(a)), input);

function add(x) {
  return x + 10;
}

function mult(x) {
  return x * 30;
}

console.log(chain(2, [add, mult]), 360);
