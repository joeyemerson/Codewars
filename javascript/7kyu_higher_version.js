// Task

// Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields.

// Return true if the first version is higher than the second version and false otherwise.

// The syntax follows the regular semver ordering rules:

// 1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
//         < 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0

// There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like 100.020.003 (it would instead be given as 100.20.3).
// Example

// For ver1 = "1.2.2" and ver2 = "1.2.0", the output should be true;

// For ver1 = "1.0.5" and ver2 = "1.1.0", the output should be false.
// Input/Output

//     [input] string ver1

//     [input] string ver2

//     [output] a boolean value

function higherVersion(ver1, ver2) {
  ver1 = ver1.split('.').map(num => +num);
  ver2 = ver2.split('.').map(num => +num);
  for (let i = 0; i < ver1.length; ++i) {
    if (ver2[i] < ver1[i]) return true;
    if (ver1[i] < ver2[i]) return false;
  }
  return false;
}

console.log(higherVersion('1.2.2', '1.2.0'), true);
console.log(higherVersion('1.0.5', '1.1.0'), false);
console.log(higherVersion('1.1.0', '1.1.5'), false);
console.log(higherVersion('10', '9'), true);
console.log(higherVersion('1.0.10', '1.1.5'), false);
console.log(higherVersion('1.1.10', '1.2.0'), false);
console.log(higherVersion('1.2.2', '1.2.10'), false);
console.log(higherVersion('1.10.2', '1.2.10'), true);
console.log(higherVersion('4.3.22.1', '4.3.22.1'), false);
