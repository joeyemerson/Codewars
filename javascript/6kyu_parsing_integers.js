// Implement a function/class, which should return an integer if the input string is in one of the formats specified below, or null/nil/None otherwise.

// Format:

//     Optional - or +
//     Base prefix 0b (binary), 0x (hexadecimal), 0o (octal), or in case of no prefix decimal.
//     Digits depending on base

// Any extra character (including whitespace) makes the input invalid, in which case you should return null/nil/None.

// Digits are case insensitive, but base prefix must be lower case.

// See the test cases for examples.

String.prototype.toInteger = function() {
  const base = this.match(/0[box]/);
  const baseLookup = {
    '0b': 2,
    '0o': 8,
    '0x': 16
  };
  if (/^[-+]?(?:0b[01]+|0o[0-7]+|\d+|0x[0-9a-fA-F]+)$/.test(this)) {
    return parseInt(this.replace(/0[box]/, ''), base ? baseLookup[base[0]] : 10);
  }
  return null;
};

console.log('123'.toInteger(), 123);
console.log('0x123'.toInteger(), 0x123);
console.log('0o123'.toInteger(), 0o123);
console.log('0123'.toInteger(), 123);
console.log('0b1010'.toInteger(), 0b1010);
console.log('+123'.toInteger(), 123);
console.log('-123'.toInteger(), -123);
console.log('-0x123'.toInteger(), -0x123);
console.log('-0o123'.toInteger(), -0123);
console.log('-0123'.toInteger(), -123);
console.log('-0b1010'.toInteger(), -0b1010);
console.log('0xDEADbeef'.toInteger(), 0xdeadbeef);
console.log('0X123'.toInteger(), null);
console.log('0O123'.toInteger(), null);
console.log('0B1010'.toInteger(), null);
console.log('0b12'.toInteger(), null);
console.log('0o18'.toInteger(), null);
console.log('123\n'.toInteger(), null);
console.log('\n123'.toInteger(), null);
console.log('123 '.toInteger(), null);
console.log(' 123'.toInteger(), null);
