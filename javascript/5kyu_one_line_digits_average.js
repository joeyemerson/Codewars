// Task

// Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a
// single integer, then return that integer. e.g.

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
digitsAverage=f=n=>n<10?n:f((n+='').replace(/./g,(m,o)=>~~(m/2+n[o-1]/2+.5)||''))

// prettier-ignore
digitsAverage=f=(n,r='',m=n/10|0)=>m?f(m,r+=n%10+m%10+1>>1):r?f(+r):n

// prettier-ignore
digitsAverage=v=n=>[...n+(s='')].reduce((b,a)=>(s+=a/2+b/2+0.5|0,a))^n?v(s):+n

// prettier-ignore
g=n=>n>9&&10*g(n/10|0)-~((n/10%10+n%10-1)/2),f=digitsAverage=n=>n>9?f(g(n)):n

console.log(digitsAverage(246), 4);
console.log(digitsAverage(89), 9);
console.log(digitsAverage(2), 2);
console.log(digitsAverage(245), 4);
console.log(digitsAverage(345), 5);
console.log(digitsAverage(346), 5);
console.log(digitsAverage(823132657), 6);
console.log(digitsAverage(445442938), 6);
console.log(digitsAverage(254779176), 8);
console.log(digitsAverage(697583280), 8);
