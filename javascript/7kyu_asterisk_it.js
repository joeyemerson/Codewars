// You are given a function that should insert an asterisk (*) between every pair of even digits in the given input,
// and return it as a string. If the input is a sequence, concat the elements first as a string.
// Input

// The input can be an integer, a string of digits or a sequence containing integers only.
// Output

// Return a string.
// Examples

// 5312708     -->  "531270*8"
// "0000"      -->  "0*0*0*0"
// [1, 4, 64]  -->  "14*6*4"

function asteriscIt(n) {
  n = Array.isArray(n) ? n.join('') : '' + n;
  return n.replace(/([02468])(?=[02468])/g, '$1*');
}

console.log(asteriscIt(5312708), '531270*8');
console.log(asteriscIt(9682135), '96*8*2135');
console.log(asteriscIt(2222), '2*2*2*2');
console.log(asteriscIt(1111), '1111');
console.log(asteriscIt(9999), '9999');
console.log(asteriscIt('0000'), '0*0*0*0');
console.log(asteriscIt(8), '8');
console.log(asteriscIt(2), '2');
console.log(asteriscIt(0), '0');
console.log(asteriscIt([1, 4, 64, 68, 67, 23, 1]), '14*6*4*6*8*67231');
