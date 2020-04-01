// Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

// freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
// freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
// freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

const freqSeq = (str, sep) => {
  const counts = {};
  for (const c of str) {
    counts[c] !== undefined ? (counts[c] += 1) : (counts[c] = 1);
  }

  return str
    .split('')
    .map(c => counts[c])
    .join(sep);
};

console.log(freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1');
console.log(freqSeq('19999999', ':'), '1:7:7:7:7:7:7:7');
console.log(freqSeq('^^^**$', 'x'), '3x3x3x2x2x1');
