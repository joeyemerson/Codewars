// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(s) {
  const res = [];
  s += '_';

  while (s.length > 1) {
    res.push(s.substring(0, 2));
    s = s.slice(2);
  }

  return res;
}

console.log(solution('abcdef'), ['ab', 'cd', 'ef']);
console.log(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
console.log(solution(''), []);
