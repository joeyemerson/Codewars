// A Noun Phrase is a phrase that can be replaced by a pronoun [he/she/it].

// For example, in the sentence:

// a girl ate the cookie

// "A girl" is a Noun Phrase, so we can say "she ate the cookie." "The cookie" is also a Noun Phrase, so we can even
// say "she ate it."

// Both of these Noun Phrases are made up of an auxialliary (aux) [the/a] followed by a Noun (N) [girl/cookie].

// More complicated Noun Phrases can also include an arbitrary number of adjectives (adj). For example:

// a big tall scary girl ate the cookie

// where "big", "tall", and "scary" are all adjectives.

// For our simplified model, we will define a Noun Phrase as an auxiliary, followed by 0 or more adjectives, followed
// by a Noun.

// Write a function that takes a sentence (as a string of words separated by spaces), a list of pronouns, and a
// dictionary (mapping words to the grammatical categories aux, adj, and N). Return the sentcnce with all Noun Phrases
// replaced by pronouns, in the order given.

// Assume:

//     sentences will contain only lower-case letters and spaces (no puctuation)
//     any words not inlcuded in the dictionary are not auxilliaries, adjectives, or nouns
//     the number of pronouns provided will be equal to the number of Noun Phrases in the sentence

function replaceNounPhrases(sentence, pronouns, dictionary) {
  const aux = [];
  const adj = [];
  const nouns = [];

  for (key in dictionary) {
    if (dictionary[key] === 'aux') aux.push(key);
    else if (dictionary[key] === 'adj') adj.push(key);
    else nouns.push(key);
  }

  const regex = new RegExp(`(?:${aux.join('|')}) (?:(?:${adj.join('|')}) )*(${nouns.join('|')})`, 'g');

  return sentence.replace(regex, () => pronouns.shift());
}

const DICTIONARY = {
  a: 'aux',
  the: 'aux',
  girl: 'N',
  cookie: 'N',
  big: 'adj',
  tall: 'adj',
  scary: 'adj',
};

console.log(replaceNounPhrases('a girl', ['she'], DICTIONARY), 'she');
console.log(replaceNounPhrases('a girl ate the cookie', ['she', 'it'], DICTIONARY), 'she ate it');
console.log(replaceNounPhrases('a a a big big a cookie', ['it'], DICTIONARY), 'a a a big big it');
console.log(replaceNounPhrases('a scary girl', ['she'], DICTIONARY), 'she');
console.log(replaceNounPhrases('a big tall scary girl ate the big cookie', ['she', 'it'], DICTIONARY), 'she ate it');
