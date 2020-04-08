// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = word => {
  const capitalLetterIndexes = [];
  let charCode;

  for (let i = 0; i < word.length; i++) {
    charCode = word[i].charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      capitalLetterIndexes.push(i);
    }
  }

  return capitalLetterIndexes;
};

const capitals2 = w => [...w].reduce((r, v, i) => (v.toUpperCase() === v ? [...r, i] : r), []);

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
console.log(capitals2('CodEWaRs'), [0, 3, 4, 6]);
