// Check if given chord is minor or major.

// Rules:

//     Basic minor/major chord have three elements.
//     Chord is minor when interval between first and second element equals 3 and between second and third -> 4.
//     Chord is major when interval between first and second element equals 4 and between second and third -> 3.
//     In minor/major chord interval between first and third element equals... 7.

// There is a preloaded list of the 12 notes of a chromatic scale built on C. This means that there are (almost) all allowed note' s names in music.

// notes = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B']

// Note that e. g. 'C#' - 'C' = 1, 'C' - 'C#' = 1, 'Db' - 'C' = 1 and 'B' - 'C' = 1.

// Input: String of notes separated by whitespace, e. g. 'A C# E'
// Output: String message: 'Minor', 'Major' or 'Not a chord'.

// prettier-ignore
const NOTE_VALUES = {
  'C': 0, 'C#': 1, 'Db': 1, 'D': 2,
  'D#': 3, 'Eb': 3, 'E': 4, 'F': 5,
  'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8,
  'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10,
  'B': 11,
};

function minorOrMajor(chord) {
  const intervals = chord
    .split(' ')
    .map(note => NOTE_VALUES[note])
    .reduce((acc, cur, idx, src) => [...acc, cur - src[idx - 1]], [])
    .slice(1); // first element will be NaN since we are comparing to previous element in reduce

  switch (true) {
    case intervals.length !== 2: // more than 3 notes in input
    case intervals.includes(undefined): // one or more note value lookups failed
    case ![-5, 7].includes(intervals[0] + intervals[1]): // check for perfect 5th in outer notes
      return 'Not a chord';

    case intervals[0] === 3:
    case intervals[0] === -9:
      return 'Minor';

    case intervals[0] === 4:
    case intervals[0] === -8:
      return 'Major';

    default:
      return 'Not a chord';
  }
}

console.log(minorOrMajor('C E G'), 'Major');
console.log(minorOrMajor('Db F Ab'), 'Major');
console.log(minorOrMajor('D F# A'), 'Major');
console.log(minorOrMajor('Eb G Bb'), 'Major');
console.log(minorOrMajor('E G# B'), 'Major');
console.log(minorOrMajor('F A C'), 'Major');
console.log(minorOrMajor('F# A# C#'), 'Major');
console.log(minorOrMajor('Gb Bb Db'), 'Major');
console.log(minorOrMajor('G B D'), 'Major');
console.log(minorOrMajor('Ab C Eb'), 'Major');
console.log(minorOrMajor('A C# E'), 'Major');
console.log(minorOrMajor('Bb D F'), 'Major');
console.log(minorOrMajor('B D# F#'), 'Major');
console.log(minorOrMajor('C Eb G'), 'Minor');
console.log(minorOrMajor('C# E G#'), 'Minor');
console.log(minorOrMajor('D F A'), 'Minor');
console.log(minorOrMajor('D# F# A#'), 'Minor');
console.log(minorOrMajor('Eb Gb Bb'), 'Minor');
console.log(minorOrMajor('E G B'), 'Minor');
console.log(minorOrMajor('F Ab C'), 'Minor');
console.log(minorOrMajor('F# A C#'), 'Minor');
console.log(minorOrMajor('G Bb D'), 'Minor');
console.log(minorOrMajor('G# B D#'), 'Minor');
console.log(minorOrMajor('A C E'), 'Minor');
console.log(minorOrMajor('Bb Db F'), 'Minor');
console.log(minorOrMajor('B D F#'), 'Minor');
console.log(minorOrMajor('C D G'), 'Not a chord');
console.log(minorOrMajor('A C D'), 'Not a chord');
console.log(minorOrMajor('A C# D#'), 'Not a chord');
console.log(minorOrMajor('D F A G'), 'Not a chord');
console.log(minorOrMajor('D F'), 'Not a chord');
console.log(minorOrMajor('D F A C#'), 'Not a chord');
console.log(minorOrMajor('K L M'), 'Not a chord');
console.log(minorOrMajor('C A G'), 'Not a chord');
console.log(minorOrMajor('C H G'), 'Not a chord');
console.log(minorOrMajor('C A G'), 'Not a chord');
console.log(minorOrMajor('G E C'), 'Not a chord');
console.log(minorOrMajor('E C A'), 'Not a chord');
console.log(minorOrMajor('G# E C#'), 'Not a chord');
console.log(minorOrMajor('Bb Gb Eb'), 'Not a chord');
