// Your task is to Reverse and Combine Words.
// It's not too difficult, but there are some things you have to consider...

// So what to do?

// Input: String containing different "words" separated by spaces

// 1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
//    (odd number of words => last one stays alone, but has to be reversed too)
// 2. Start it again until there's only one word without spaces
// 3. Return your result...

// Some easy examples:

// Input:  "abc def"
// Output: "cbafed"

// Input:  "abc def ghi 123"
// Output: "defabc123ghi"

// Input:  "abc def gh34 434ff 55_eri 123 343"
// Output: "43hgff434cbafed343ire_55321"

// I think it's clear?!

// prettier-ignore
const reverseWord = word => {
  let reversed = '';
  for (let i = word.length - 1; 0 <= i; i--) {
    reversed = reversed + word[i];
  }
  return reversed;
}

const reverseAndCombinePair = pair => {
  if (!pair.includes(' ')) return reverseWord(pair);
  words = pair.split(' ');
  return reverseWord(words[0]) + reverseWord(words[1]);
};

const reverseAndCombineText = s => {
  if (!/\s/.test(s)) return s;
  while (s.includes(' ')) {
    const pairs = s.match(/\w+\s\w+|\w+/g);
    const reversedPairs = [];
    for (const pair of pairs) {
      reversedPairs.push(reverseAndCombinePair(pair));
    }
    s = reversedPairs.join(' ');
  }
  return s;
};

console.log(reverseAndCombineText('abc def') === 'cbafed');
console.log(reverseAndCombineText('abc def ghi jkl') === 'defabcjklghi');
console.log(reverseAndCombineText('dfghrtcbafed') === 'dfghrtcbafed');
console.log(
  reverseAndCombineText('234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44') ===
    'trzwqfdstrteettr45hh4325543544hjhjh21lllll'
);
console.log(reverseAndCombineText('sdfsdf wee sdffg 342234 ftt') === 'gffds432243fdsfdseewttf');
