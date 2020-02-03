// Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.
// Examples

// removeOrAdd("Hi!") === "Hi"
// removeOrAdd("Hi! Hi!") === "Hi Hi"
// removeOrAdd("Hi! Hi") === "Hi Hi!"
// removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
// removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"

const reverseString = s => {
  return s
    .split('')
    .reverse()
    .join('');
};

const removeOrAdd = s => {
  let result = [];
  for (word of s.split(' ')) {
    const reversed = reverseString(word);
    if (reversed[0] === '!' && reversed[1] !== '!') {
      result.push(word.slice(0, word.length - 1));
    } else if (reversed[0] !== '!') {
      result.push(word + '!');
    } else {
      result.push(word);
    }
  }
  return result.join(' ');
};

// regex solution for kicks...
const removeOrAddWithRegex = s => {
  return s
    .split(' ')
    .map(word => {
      if (word.match(/!!$/)) return word;
      if (!word.match(/!$/)) return word + '!';
      return word.replace(/!$/, '');
    })
    .join(' ');
};

console.log('Tests without regex');
console.log(removeOrAdd('Hi!') === 'Hi');
console.log(removeOrAdd('Hi! Hi!') === 'Hi Hi');
console.log(removeOrAdd('Hi! Hi') === 'Hi Hi!');
console.log(removeOrAdd('Hi! Hi Hi!!') === 'Hi Hi! Hi!!');
console.log(removeOrAdd('!Hi! !Hi !Hi!!') === '!Hi !Hi! !Hi!!');

console.log('Tests with regex');
console.log(removeOrAddWithRegex('Hi!') === 'Hi');
console.log(removeOrAddWithRegex('Hi! Hi!') === 'Hi Hi');
console.log(removeOrAddWithRegex('Hi! Hi') === 'Hi Hi!');
console.log(removeOrAddWithRegex('Hi! Hi Hi!!') === 'Hi Hi! Hi!!');
console.log(removeOrAddWithRegex('!Hi! !Hi !Hi!!') === '!Hi !Hi! !Hi!!');
