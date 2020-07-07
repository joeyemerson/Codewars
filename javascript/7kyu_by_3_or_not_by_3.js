// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of
// the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing
// the sum by three, then the original number is divisible by three as well.

// Given a series of numbers as a string, determine if the number represented by the string is divisible by three.

// You can expect all test case arguments to be strings representing values greater than 0.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

function divisibleByThree(digits) {
  const sumOfDigits = digits.split('').reduce((acc, val) => acc + +val, 0);
  return sumOfDigits % 3 === 0;
}

console.log(divisibleByThree('123'), true);
console.log(divisibleByThree('19254'), true);
console.log(divisibleByThree('88'), false);
console.log(divisibleByThree('1'), false);
