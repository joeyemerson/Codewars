// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
const isAnagram = (test, original) => {
  if (test.length !== original.length) return false;

  [test, original] = [test.toLowerCase(), original.toLowerCase()];

  for (let i = 0; i < test.length; i++) {
    const matchingCharIndex = original.indexOf(test[i]);
    if (matchingCharIndex === -1) {
      return false;
    } else {
      original = original.slice(0, matchingCharIndex) + original.slice(matchingCharIndex + 1);
    }

    return true;
  }
};

// Interesting approach, but wouldn't work if string contains non-letter characters.
// Also, bitwise operations are usually not a great choice in JS.
const isAnagram2 = (test, original) => {
  if (test.length !== original.length) return false;

  // Assuming no word would ever be more than 127 characters
  const map = new Int8Array(26);

  for (let i = 0; i < test.length; i++) {
    map[test.charCodeAt(i) & 31]++;
    map[original.charCodeAt(i) & 31]--;
  }

  return map.every(count => count === 0);
};

// Less performant, but likely the most readable solution.
const isAnagram3 = (test, original) => {
  if (test.length !== original.length) return false;

  test = test
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  original = original
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  return test === original;
};

console.log(isAnagram3('foefet', 'toffee'), true);
console.log(isAnagram3('Buckethead', 'DeathCubeK'), true);
console.log(isAnagram3('Twoo', 'WooT'), true);
console.log(isAnagram3('dumble', 'bumble'), false);
console.log(isAnagram3('ound', 'round'), false);
console.log(isAnagram3('apple', 'pale'), false);
