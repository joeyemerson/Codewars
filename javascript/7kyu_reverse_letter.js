// Task

// Given a string str, reverse it omitting all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

//     A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

const reverseLetter = str => {
  let reversedString = '';

  for (let i = str.length - 1; 0 <= i; i--) {
    if (/[a-z]/i.test(str[i])) reversedString += str[i];
  }

  return reversedString;
};

console.log(reverseLetter('krishan'), 'nahsirk');
console.log(reverseLetter('ultr53o?n'), 'nortlu');
console.log(reverseLetter('ab23c'), 'cba');
console.log(reverseLetter('krish21an'), 'nahsirk');
