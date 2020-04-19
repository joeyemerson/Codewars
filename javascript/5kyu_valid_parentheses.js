// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  let count = 0;
  for (c of parens) {
    count += c === '(' ? 1 : -1;
    if (count < 0) return false;
  }
  return count === 0;
}

// Fun recursive solution, but the iterative approach is
// more performant and readable.
function validParentheses(parens) {
  if (parens === '') return true;
  if (parens.length % 2) return false;
  return validParentheses(parens.replace(/\([^\(\)]*\)/, ''));
}

console.log(validParentheses('()'), true);
console.log(validParentheses('())'), false);
console.log(validParentheses('()()()()()()()()'), true);
console.log(validParentheses('(((((((((((((())))))))))))))'), true);
console.log(validParentheses('(((((((((((((()))))))))))))))'), false);
console.log(validParentheses('()()())((()))'), false);
