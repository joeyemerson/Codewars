// Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive
// positive numbers.

// Consider an Example :
//     10 , could be expressed as a sum of 1 + 2 + 3 + 4.

// Task
// Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers
// , OtherWise return false .
// Notes

//     Guaranteed constraint : 2 ≤ N ≤ (2^32) -1 .

// Input >> Output Examples:
// * consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) .
// * consecutiveDucks(64)  ==>  return (false)
// * consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  .

function consecutiveDucks(n) {
  return !isPowerOfTwo(n);
}

function isPowerOfTwo(n) {
  return (n & (n - 1)) === 0;
}

console.log(consecutiveDucks(69), true);
console.log(consecutiveDucks(8), false);
console.log(consecutiveDucks(57), true);
console.log(consecutiveDucks(6), true);
console.log(consecutiveDucks(13), true);
console.log(consecutiveDucks(16), false);
console.log(consecutiveDucks(91), true);
console.log(consecutiveDucks(75), true);
console.log(consecutiveDucks(38), true);
console.log(consecutiveDucks(25), true);
console.log(consecutiveDucks(32), false);
console.log(consecutiveDucks(65), true);
console.log(consecutiveDucks(13), true);
console.log(consecutiveDucks(16), false);
console.log(consecutiveDucks(99), true);
console.log(consecutiveDucks(522), true);
console.log(consecutiveDucks(974), true);
console.log(consecutiveDucks(755), true);
console.log(consecutiveDucks(512), false);
console.log(consecutiveDucks(739), true);
console.log(consecutiveDucks(1006), true);
console.log(consecutiveDucks(838), true);
console.log(consecutiveDucks(1092), true);
console.log(consecutiveDucks(727), true);
console.log(consecutiveDucks(648), true);
console.log(consecutiveDucks(1024), false);
console.log(consecutiveDucks(851), true);
console.log(consecutiveDucks(541), true);
console.log(consecutiveDucks(1011), true);
console.log(consecutiveDucks(822), true);
console.log(consecutiveDucks(382131), true);
console.log(consecutiveDucks(118070), true);
console.log(consecutiveDucks(17209), true);
console.log(consecutiveDucks(32768), false);
console.log(consecutiveDucks(161997), true);
console.log(consecutiveDucks(400779), true);
console.log(consecutiveDucks(198331), true);
console.log(consecutiveDucks(325482), true);
console.log(consecutiveDucks(88441), true);
console.log(consecutiveDucks(648), true);
console.log(consecutiveDucks(65536), false);
console.log(consecutiveDucks(323744), true);
console.log(consecutiveDucks(183540), true);
console.log(consecutiveDucks(65271), true);
console.log(consecutiveDucks(5263987), true);
