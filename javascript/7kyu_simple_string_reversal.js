// In this Kata, we are going to reverse a string while maintaining spaces.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo".
// -- However, there is a space after the first three characters, hence "edo cruo"

// solve("your code rocks") = "skco redo cruoy"
// solve("codewars") = "srawedoc"

function solve(str) {
  let res = '';

  for (let i = str.length - 1; 0 <= i; i--) {
    if (str[i] !== ' ') res += str[i];
    if (str[res.length] === ' ') res += str[res.length];
  }

  return res;
}

console.log(solve('codewars'), 'srawedoc');
console.log(solve('your code'), 'edoc ruoy');
console.log(solve('your code rocks'), 'skco redo cruoy');
console.log(solve('i love codewars'), 's rawe docevoli');
