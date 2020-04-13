// Shorten Me: Array Declaration VIII (Musical Scales)
// Task

// You have to write an array() function returning an array object with elements as follow:

// [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
//   'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ]

// Coding Limitation:

// Less than 55 characters

//prettier-ignore
array=_=>'CC#DD#EFF#GG#AA#B'.repeat(2).match(/.#?/g)

//prettier-ignore
console.log(array(), [
  'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
  'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
]);
