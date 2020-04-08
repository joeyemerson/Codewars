// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(arr) {
  let stringSum = 0;
  let nonStringSum = 0;
  arr.forEach(n => {
    typeof n === 'string' ? (stringSum += +n) : (nonStringSum += n);
  });
  return nonStringSum - stringSum;
}

// code golf time!
// prettier-ignore
f=a=>a.reduce((a,n)=>(+n!==n?a-+n:a+n),0);

console.log(f([9, 3, '7', '3']), 2);
console.log(f(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(f(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
