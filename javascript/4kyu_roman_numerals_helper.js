// Task

// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
// Examples

// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

// Help

// | Symbol | Value | |----------------| | I | 1 | | V | 5 | | X | 10 | | L | 50 | | C | 100 | | D | 500 | | M | 1000 |

const values = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const numerals = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
};

class RomanNumerals {
  static toRoman(int) {
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';

    while (int) {
      for (const num of nums) {
        if (num === 1) {
          result += 'I'.repeat(int);
          int = 0;
        } else if (num <= int) {
          result += numerals[num];
          int -= num;
          break;
        }
      }
    }
    return result;
  }

  static fromRoman(str) {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
      if (values[str.slice(i, i + 2)]) {
        result += values[str.slice(i, i + 2)];
        i++;
      } else {
        result += values[str[i]];
      }
    }

    return result;
  }
}

console.log(RomanNumerals.toRoman(1000), 'M');
console.log(RomanNumerals.toRoman(999), 'CMXCIX');
console.log(RomanNumerals.toRoman(4), 'IV');
console.log(RomanNumerals.toRoman(1), 'I');
console.log(RomanNumerals.toRoman(1991), 'MCMXCI');
console.log(RomanNumerals.toRoman(2006), 'MMVI');
console.log(RomanNumerals.toRoman(2020), 'MMXX');

console.log(RomanNumerals.fromRoman('XXI'), 21);
console.log(RomanNumerals.fromRoman('I'), 1);
console.log(RomanNumerals.fromRoman('III'), 3);
console.log(RomanNumerals.fromRoman('IV'), 4);
console.log(RomanNumerals.fromRoman('MMVII'), 2007);
console.log(RomanNumerals.fromRoman('MDCLXIX'), 1669);
