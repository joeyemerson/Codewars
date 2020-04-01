// Task:

// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

//     Note:Returning the pattern is not the same as Printing the pattern.

// Rules/Note:

//     If n < 1 then it should return "" i.e. empty string.
//     There are no whitespaces in the pattern.

// Pattern:

// 1
// 22
// 333
// ....
// .....
// nnnnnn

// Examples:

//     pattern(5):

//     1
//     22
//     333
//     4444
//     55555

//     pattern(11):

//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
//     10101010101010101010
//     1111111111111111111111

//     Hint: Use \n in string to jump to next line

function pattern(n) {
  if (n < 1) return '';

  let output = [];
  for (let i = 1; i <= n; i++) {
    output.push(i.toString().repeat(i));
  }

  return output.join('\n');
}

const pattern2 = n => {
  return n < 1
    ? ''
    : Array.from({ length: n }, (v, i) => i + 1)
        .map(x => x.toString().repeat(x))
        .join('\n');
};

console.log(pattern2(1) === '1');
console.log(pattern2(2) === '1\n22');
console.log(pattern2(5) === '1\n22\n333\n4444\n55555');
