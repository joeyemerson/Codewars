// Return 1 when ANY odd bit of x equals 1; 0 otherwise.

// x is unsigned.

// (Assume "0 index", aka the least significant bit is considered position 0)

// Assume x is 32 bits.

// Example:

// any_odd(2) will return 1 because at least one odd bit is 1 (0010).

// any_odd(2863311530) will return 1 because all of the odd bits are 1 (10101010101010101010101010101010).

// any_odd(5) will return 0 because none of the odd bits are 1 (0101).

function anyOdd(int) {
  const binary = int.toString(2);
  for (let i = binary.length - 2; 0 <= i; i -= 2) {
    if (binary[i] === '1') return 1;
  }
  return 0;
}

// Checks to see if any input bits match 32 bit int with all odd bits of 1
// 10101010101010101010101010101010
function anyOdd(x) {
  return +!!(x & 0xaaaaaaaa);
}

console.log(anyOdd(2863311530), 1);
console.log(anyOdd(128), 1);
console.log(anyOdd(131), 1);
console.log(anyOdd(2), 1);
console.log(anyOdd(24082), 1);
console.log(anyOdd(0), 0);
console.log(anyOdd(85), 0);
console.log(anyOdd(1024), 0);
console.log(anyOdd(1), 0);
console.log(anyOdd(1365), 0);
