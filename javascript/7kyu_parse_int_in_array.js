// A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.

// Examples:

// parseNumbers(['10']) // should return [10]
// parseNumbers(['-1','0','1']) // should return [-1,0,1]

/**
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers
 */

const parseNumbers = intStrings => {
  return intStrings.map(int => parseInt(int, 10));
};

console.log(parseNumbers([]), []);
console.log(parseNumbers(['13']), [13]);
console.log(parseNumbers(['2.48']), [2]);
console.log(parseNumbers(['-1', '0', '1']), [-1, 0, 1]);
