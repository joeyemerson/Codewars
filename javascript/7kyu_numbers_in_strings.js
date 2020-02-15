// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

const solve = s => {
  return Math.max(...s.match(/\d+/g));
};

console.log(solve('gh12cdy695m1'), 695);
console.log(solve('2ti9iei7qhr5'), 9);
console.log(solve('vih61w8oohj5'), 61);
console.log(solve('f7g42g16hcu5'), 42);
console.log(solve('lu1j8qbbb85'), 85);
