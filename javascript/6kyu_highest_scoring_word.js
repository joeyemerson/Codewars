// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(words) {
  let res = { word: '', score: 0 };

  words.split(' ').forEach(word => {
    let score = word.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);
    if (res.score < score) res = { word, score };
  });

  return res.word;
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
