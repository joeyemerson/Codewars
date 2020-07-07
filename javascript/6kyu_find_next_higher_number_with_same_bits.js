// Your task is to Find the next higher number (int) with same '1'- Bits.

// I.e. as much '1' bits as before and output next higher than input. Input is always an int >0 up to 1<<30.
// No bad cases or special tricks...

// Some easy examples:

// Input: 129  => Output: 130 (10000001 => 10000010)
// Input: 127 => Output: 191 (01111111 => 10111111)
// Input: 1 => Output: 2 (01 => 10)
// Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111)

function nextHigher(n) {
  const targetSetBits = countSetBits(n);
  while (true) {
    if (countSetBits(++n) === targetSetBits) return n;
  }
}

function countSetBits(n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

console.log(nextHigher(128), 256);
console.log(nextHigher(1), 2);
console.log(nextHigher(1022), 1279);
console.log(nextHigher(127), 191);
console.log(nextHigher(1253343), 1253359);
