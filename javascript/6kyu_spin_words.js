// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// Array.forEach version
// const spinWords = s => {
//   const res = [];
//   s.split(' ').forEach(word => {
//     word.length >= 5
//       ? res.push(
//           word
//             .split('')
//             .reverse()
//             .join('')
//         )
//       : res.push(word);
//   });
//   return res.join(' ');
// };

// Array.map version
// prettier-ignore
const spinWords = s => s.split(' ').map(w => w.length >= 5 ? w.split('').reverse().join('') : w).join(' ')

console.log(spinWords('Welcome') === 'emocleW');
console.log(spinWords('Hey fellow warriors') === 'Hey wollef sroirraw');
console.log(spinWords('This is a test') === 'This is a test');
console.log(spinWords('This is another test') === 'This is rehtona test');
console.log(spinWords('You are almost to the last test') === 'You are tsomla to the last test');
console.log(spinWords('Just kidding there is still one more') === 'Just gniddik ereht is llits one more');
console.log(spinWords('Seriously this is the last one') === 'ylsuoireS this is the last one');
