// Suppose we know the process (A) by which a string s has been coded to a string r.

// The aim of the kata is to decode r to get back the original string s.
// Explanation of the known process (A):

//     data: a string s composed of lowercase letters from a to z and a positive integer num
//     we know there is a correspondence between abcde...uvwxyz and 0, 1, 2 ..., 23, 24, 25 : 0 <-> a, 1 <-> b ...
//     if c is a character of s whose corresponding number is x, apply to x the function f: x-> f(x) = num * x % 26,
//     then find ch the corresponding character of f(x)
//     Accumulate all these ch in a string r.
//     concatenate num and r and return the result.

// Example:
// code("mer", 6015) -> "6015ekx"
// m <-> 12, 12 * 6015 % 26 == 4, 4 <-> e
// e <-> 4, 4 * 6015 % 26 == 10, 10 <-> k
// r <-> 17, 17 * 6015 % 26 == 23, 23 <-> x
// We get "ekx" hence "6015ekx"

// Task
// A string s has been coded to a string r by the above process (A). Write a function r -> decode(r) to get back s
// whenever it is possible.

// Indeed it can happen that the decoding is impossible when positive integer num has not been correctly chosen. In
// that case return "Impossible to decode".

// Example:
// decode("6015ekx") -> "mer"
// decode("5057aan") -> "Impossible to decode"

function decode(input) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const inputParts = input.match(/(\d+)([a-z]+)/);
  const key = parseInt(inputParts[1]);
  const encodedString = inputParts[2];
  const charMap = getCharMap(key, alphabet.length);

  if (!charMap) return 'Impossible to decode';
  else return encodedString.replace(/./g, char => alphabet[charMap.get(alphabet.indexOf(char))]);
}

function getCharMap(key, len = 26) {
  const charMap = new Map();
  for (let i = 0; i < len; i++) {
    charMap.set((i * key) % 26, i);
  }
  return charMap.size === 26 ? charMap : null;
}

console.log(decode('6015ekx'), 'mer\n');
console.log(decode('1273409kuqhkoynvvknsdwljantzkpnmfgf'), 'uogbucwnddunktsjfanzlurnyxmx\n');
console.log(decode('1544749cdcizljymhdmvvypyjamowl'), 'mfmwhbpoudfujjozopaugcb\n');
console.log(decode('105860ymmgegeeiwaigsqkcaeguicc'), 'Impossible to decode\n');
console.log(decode('1122305vvkhrrcsyfkvejxjfvafzwpsdqgp'), 'rrsxppowmjsrclfljrajtybwviqb\n');
