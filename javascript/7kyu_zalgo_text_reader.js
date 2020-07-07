// Zalgo text is text that leaks into our plane of existence from a corrupted dimension of Unicode. For example:

// H̗̪͇͓̙͎̣̄ͬa͚̯̦͉̖̥v͆ͩ̃͆̓̐ͥe̟͎͖͕͍̎ ̰͚̩̟͕̰͊̽̍ͯ̌͊ā̖̪͉͍̥͙̿ͩ̃ͅ ̬̥͎͑̿ͧg̰̳̺͔̦͉ͫ̀̐̓̐r̝̫̱̘̰͐͋ͯͭͭͭ͆e͙͕̖̗͙̰͌ͭä͓͚̝͓́̌͑ͪ͊ṱͥ ̱ͣd͎͔͎͇̫̪̘̃͐̇à͕̮̈͋ͪy̼̳̱ͮ!̳̥̰̭͇̔ͮ̽̓

// _

// Write a function readZalgo that converts a string of Zalgo text into a string interpretable by our mortal eyes. The string above would be converted into:

// Have a great day!

// The converted string should only feature uppercase letters (A to Z), lowercase letters (a to z), numbers (0 to 9), basic punctuation marks (. , ! ?), and spaces ().

const readZalgo = zalgoText => zalgoText.replace(/[^a-z\d\s.,!?]/gi, '');

console.log(readZalgo('H̗̪͇͓̙͎̣̄ͬa͚̯̦͉̖̥v͆ͩ̃͆̓̐ͥe̟͎͖͕͍̎ ̰͚̩̟͕̰͊̽̍ͯ̌͊ā̖̪͉͍̥͙̿ͩ̃ͅ ̬̥͎͑̿ͧg̰̳̺͔̦͉ͫ̀̐̓̐r̝̫̱̘̰͐͋ͯͭͭͭ͆e͙͕̖̗͙̰͌ͭä͓͚̝͓́̌͑ͪ͊ṱͥ ̱ͣd͎͔͎͇̫̪̘̃͐̇à͕̮̈͋ͪy̼̳̱ͮ!̳̥̰̭͇̔ͮ̽̓'), 'Have a great day!');
