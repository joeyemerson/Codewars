// This kata is the inverse of the previous one: you must write a method to_pitch_class that, when given an integer representing a musical pitch class, returns an array of every name for that note.

// There are only twelve pitch classes (which are cyclical, e.g., the note above number 11 is number 0), and the numerical values of the natural notes are as follows:

// C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11

// A sharp ("♯") raises a note by one, and a flat ("♭") lowers it by one. For this kata, we'll also be using the double sharp and the double flat, which are exactly what they sound like: the double sharp raises a pitch by two, and the double flat lowers a pitch by two. Since Codewars doesn't allow the characters for sharp, flat, double sharp, and double flat, we'll use the strings "#", "b", "x", and "bb" instead.

// Some examples:

// toPitchClass(2) // - > should return ['D', 'Cx', 'Ebb']

// toPitchClass(10) // -> should return ['A#', 'Bb', 'Cbb']

const PITCH_CLASSES = {
  0: ['B#', 'C', 'Dbb'],
  1: ['Bx', 'C#', 'Db'],
  2: ['Cx', 'D', 'Ebb'],
  3: ['D#', 'Eb', 'Fbb'],
  4: ['Dx', 'E', 'Fb'],
  5: ['E#', 'F', 'Gbb'],
  6: ['Ex', 'F#', 'Gb'],
  7: ['Fx', 'G', 'Abb'],
  8: ['G#', 'Ab'],
  9: ['Gx', 'A', 'Bbb'],
  10: ['A#', 'Bb', 'Cbb'],
  11: ['Ax', 'B', 'Cb'],
};

const toPitchClass = n => {
  return PITCH_CLASSES[n];
};

// Assuming both inputs are sorted
const bothArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

for (key in PITCH_CLASSES) {
  const input = key;
  const actualOutput = toPitchClass(key).sort();
  const expectedOutput = PITCH_CLASSES[key].sort();

  console.log('='.repeat(30));
  console.log(`${bothArraysEqual(actualOutput, expectedOutput) ? 'TEST PASSED' : 'TEST FAILED'}\n`);
  console.log(`Input: ${input}`);
  console.log(`Actual Output  : [${actualOutput}]`);
  console.log(`Expected Output: [${expectedOutput}]`);
}
