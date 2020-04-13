// Task

// Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

// It is guaranteed that there is at least one tooth at each end of the comb.

//     Note, that the combs can not be rotated/reversed.

// Example

// For comb1 = "*..*" and comb2 = "*.*", the output should be 5

// Although it is possible to place the combs like on the first picture, the best way to do this is either picture 2 or picture 3.

// Input/Output

//     [input] string comb1

//     A comb is represented as a string. If there is an asterisk ('*') in the ith position, there is a tooth there. Otherwise there is a dot ('.'), which means there is a missing tooth on the comb.

//     Constraints: 1 ≤ comb1.length ≤ 10.
//     [input] string comb2
//     The second comb is represented in the same way as the first one.
//     Constraints: 1 ≤ comb2.length ≤ 10.
//     [output] an integer
//     The minimum length of a purse Miss X needs.

function combs(comb1, comb2) {
  const [smallComb, bigComb] = [comb1, comb2].sort((a, b) => a.length - b.length);

  // check each section of bigComb to see if smallComb will fit
  for (let i = 0; i < bigComb.length - smallComb.length + 1; i++) {
    if (sectionsWillFit(smallComb, bigComb.slice(i, i + smallComb.length))) {
      return bigComb.length; // smallest length possible
    }
  }

  // res = length of both combs side-by-side if none of the tests pass
  let res = smallComb.length + bigComb.length;

  for (let i = 1; i < smallComb.length - 1; i++) {
    if (
      // check left section of smallComb against right section of bigComb
      sectionsWillFit(smallComb.slice(0, i + 1), bigComb.slice(-i - 1)) ||
      // check right section of smallComb against left section of bigComb
      sectionsWillFit(smallComb.slice(-i - 1), bigComb.slice(0, i + 1))
    ) {
      res = Math.min(res, smallComb.length + bigComb.length - i - 1);
    }
  }

  return res;
}

function sectionsWillFit(section1, section2) {
  for (let i = 0; i < section1.length; i++) {
    if (section1[i] === '*' && section2[i] === '*') return false;
  }
  return true;
}

console.log(combs('*..*', '*.*'), 5);
console.log(combs('*...*', '*.*'), 5);
console.log(combs('*..*.*', '*.***'), 9);
console.log(combs('*.*', '*.*'), 4);
console.log(combs('*.**', '*.*'), 5);
// test for direction of comb
console.log(combs('*.**', '*.***'), 9);
console.log(combs('*.*.*.**', '*.**'), 12);
// dunno
console.log(combs('**.*', '*.*.*....*'), 10);
console.log(combs('*..******', '*..**'), 11);
// cannot read property of null
console.log(combs('*****', '**.*.*'), 11);
// more failures...
console.log(combs('*....*', '**.****'), 8);
console.log(combs('*.*.*..*', '*.*'), 8);
console.log(combs('**..*.*.*', '**.*.*'), 9);
// still more failures!
console.log(combs('**.**.**', '*.....*.*'), 11);
console.log(combs('**..**', '*.....*'), 9);
