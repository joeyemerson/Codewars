// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

//   onlyOne() --> false
//   onlyOne(true, false, false) --> true
//   onlyOne(true, false, false, true) --> false
//   onlyOne(false, false, false, false) --> false

const onlyOne = (...args) => {
  let trueCount = 0;
  for (arg of args) {
    if (arg) trueCount++;
  }
  return trueCount === 1 ? true : false;
};

console.log(onlyOne(true, false) == true);
