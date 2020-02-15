// Write a function that adds from two invocations.

// add(3)(4)  // 7
// add(12)(20) // 32

function add(a) {
  return function(b) {
    return a + b;
  };
}

console.log(add(2)(5), 7);
console.log(add(14)(25), 39);
