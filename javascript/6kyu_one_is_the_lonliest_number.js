// One is the loneliest number
// Task

// The range of vision of a digit is its own value. 1 can see one digit to the left and one digit to the right,2 can
// see two digits, and so on.

// Thus, the loneliness of a digit N is the sum of the digits which it can see.

// Given a non-negative integer, your funtion must determine if there's at least one digit 1 in this integer such that
// its loneliness value is minimal.

// Example
// number = 34315

// digit 	can see on the left 	can see on the right 	loneliness
// 3 	- 	431 	4 + 3 + 1 = 8
// 4 	3 	315 	3 + 3 + 1 + 5 = 12
// 3 	34 	15 	3 + 4 + 1 + 5 = 13
// 1 	3 	5 	3 + 5 = 8
// 5 	3431 	- 	3 + 4 + 3 + 1 = 11

// Is there 1 for which the loneliness is minimal? Yes.

function loneliest(n) {
  const digits = n.toString().split('');
  const loneliness = new Uint8Array(10).fill(163);

  for (let i = 0; i < digits.length; i++) {
    const curDigit = +digits[i];
    const leftStartIndex = i - curDigit < 0 ? 0 : i - curDigit;
    const rightEndIndex = i + curDigit > digits.length ? digits.length : i + curDigit + 1;
    const leftSum = digits.slice(leftStartIndex, i).reduce(sum, 0);
    const rightSum = digits.slice(i + 1, rightEndIndex).reduce(sum, 0);
    loneliness[curDigit] = Math.min(leftSum + rightSum, loneliness[curDigit]);
  }

  return loneliness[1] === Math.min(...loneliness);
}

function sum(acc, val) {
  return acc + +val;
}

console.log(loneliest(34315), true);
console.log(loneliest(123456), true);
console.log(loneliest(8854778), false);
console.log(loneliest(65432165432), false);
console.log(loneliest(0), false);
console.log(loneliest(1), true);
console.log(loneliest(11111), true);
