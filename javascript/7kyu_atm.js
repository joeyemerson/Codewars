// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

// You are given money in nominal value of n with 1<=n<=1500.

// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

const solve = n => {
  const vals = [500, 200, 100, 50, 20, 10];
  let count = 0;
  let i = 0;
  while (i < vals.length) {
    if (n < vals[i]) {
      i++;
    } else {
      n -= vals[i];
      count++;
    }
  }
  return n === 0 ? count : -1;
};

// should work with notes
console.log(solve(770), 4);
console.log(solve(550), 2);
console.log(solve(10), 1);
console.log(solve(1250), 4);
console.log(solve(5000), 10);

// should return -1
console.log(solve(125), -1);
console.log(solve(666), -1);
console.log(solve(42), -1);
