// Task

// It's based on this kata(please forgive my lazyness, I'm using a Iframe put the original kata below):
// Note
// You are given num (up to 15 digits, never less than 0).

// If the length of num is even, return odd numbers as ints and even ones as strings, based on their position in the given number. Strings alternate in type cases: starting in lowercase to uppercase and so on based on position. If the length of num is odd, all the rules are opposite. See sample tests.

// Note: Positions of numbers are 1-based.

// Kata's rules are a bit complex. It's recommand you solved the based kata at first.
// Code Limit

// code.length < 180 characters.

// Advice: if your code length is much longer than the limit, giving up is also a good choice :D

// prettier-ignore
conv=n=>(n+='').replace(/./g,(d,i)=>n.length%2-d%2?d:''.padEnd(i+1,'zeroZERO,ONEone,twoTWO,THREEthree,fourFOUR,FIVEfive,sixSIX,SEVENseven,eightEIGHT,NINEnine'.split`,`[d]))

const tests = [
  { input: 0, output: '0' },
  { input: 11, output: '11' },
  { input: 1101, output: '11zer1' },
  { input: 54563, output: 'F4FIV6THREE' },
  { input: 47309534, output: 'f73zero953fourFOUR' },
  { input: 34266262106, output: 'T4266262ONEoneONE06' },
  { input: 15795379351687, output: '15795379351sixSIXsixSIXeightEIGHTeig7' },
  {
    input: 157953793516872,
    output: 'OFISEVNINEFIVEfTHREEtSEVENseNINEnineTHREEthreFIVEfiveFIONEoneONEon68SEVENsevenSEVE2',
  },
];

for (testCase of tests) {
  const input = testCase.input;
  const expected = testCase.output;
  const result = conv(testCase.input);

  console.log('='.repeat(30));
  console.log(expected === result ? 'TEST PASSED :)' : 'TEST FAILED :(', '\n');
  console.log(`Input: ${input}`);
  console.log(`Expected Ouput: ${expected}`);
  console.log(`Actual Ouput  : ${result}`);
}
