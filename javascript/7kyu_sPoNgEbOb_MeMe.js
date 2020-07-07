// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// You need to create a function that converts the input into this format, with the output being the same string expect
// there is a pattern of uppercase and lowercase letters.

// Examples:

// spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
// spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'

function spongeMeme(str) {
  let MeMeStRiNg = '';
  for (let i = 0; i < str.length; i++) {
    MeMeStRiNg += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
  }
  return MeMeStRiNg;
}

const spongeMeme2 = str => [...str].map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join``;

console.log(spongeMeme2('stop Making spongebob Memes!'), 'StOp mAkInG SpOnGeBoB MeMeS!');
console.log(spongeMeme2('colored teens cant Be successful in tech'), 'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh');
