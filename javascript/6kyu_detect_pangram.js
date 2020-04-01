// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(s) {
  const seen = new Set();

  for (const c of s) {
    if (c.match(/[a-z]/i)) seen.add(c.toLowerCase());
    if (seen.size === 26) return true;
  }

  return false;
}

let string;

string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string), true);

string = 'This is not a pangram.';
console.log(isPangram(string), false);
