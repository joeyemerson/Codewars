// Task

// Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.

// Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)
// Examples

// digitsAverage(246)  ==>  4

// original: 2   4   6
//            \ / \ /
// 1st iter:   3   5
//              \ /
// 2nd iter:     4

function digitsAverage(n) {
  let res = '' + n;
  while (res.length > 1) {
    let temp = '';
    for (let i = 0; i < res.length - 1; i++) {
      temp += `${Math.ceil(res[i] / 2 + res[i + 1] / 2)}`;
    }
    res = temp;
  }
  return +res;
}

//! code.length < 79 characters.

// prettier-ignore
digitsAverage=f=n=>n<10?n:f((n+='').replace(/./g,(m,o)=>~~(m/2+n[o+1]/2+.5)||''))

console.log(digitsAverage(246), 4);
console.log(digitsAverage(89), 9);
console.log(digitsAverage(2), 2);
console.log(digitsAverage(245), 4);
console.log(digitsAverage(345), 5);
console.log(digitsAverage(346), 5);
