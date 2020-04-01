// Create a moreZeros function which will receive a string for input, and return an array containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False

//         --> ['a','b','d']

// 'DIGEST'--> ['D','I','E','T']

// All input will be valid strings of length > 0.

function moreZeros(s) {
  const res = new Set();

  for (const c of s) {
    const binary = c.charCodeAt(0).toString(2);
    const zeros = binary.match(/0/g);
    if (!zeros) continue;
    else if (zeros.length > binary.length / 2) {
      res.add(c);
    }
  }

  return Array.from(res);
}

console.log(moreZeros('abcde'), ['a', 'b', 'd']);
console.log(moreZeros('Great job!'), ['a', ' ', 'b', '!']);
console.log(moreZeros('DIGEST'), ['D', 'I', 'E', 'T']);
console.log(moreZeros('abcdeabcde'), ['a', 'b', 'd']);
console.log(moreZeros('na6R!42B{DF{9R8d=}UES!ju?B.w)sX+v1)(.yj%)@$PWd |Bzy>KEY{-rV[Ma4l:.}bwF'), [
  'a',
  'R',
  '!',
  'B',
  'D',
  'F',
  'd',
  'E',
  'X',
  '(',
  '@',
  '$',
  'P',
  ' ',
  'b'
]);
