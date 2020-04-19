// In genetics, a sequence’s motif is a nucleotides (or amino-acid) sequence pattern. Sequence motifs have a biological significance. For more information you can take a look here.

// For this kata you need to complete the function motif_locator. This function receives 2 arguments - a sequence and a motif. Both arguments are strings.

// You should return an array that contains all the start positions of the motif (in order). A sequence may contain 0 or more repetitions of the given motif. Note that the number of the first position is 1, not 0.

// Some examples:

//     For the sequence "ACGTGGGGACTAGGGG" and the motif "GGGG" the result should be [5, 13].
//     For the sequence "ACCGTACCAAGGGACC" and the motif "AAT" the result should be []
//     For the sequence "GGG" and the motif "GG" the result should be [1, 2]

function motifLocator(sequence, motif) {
  const res = [];
  let curPos = sequence.indexOf(motif);

  while (curPos !== -1) {
    res.push(curPos + 1);
    sequence = sequence.slice(0, curPos) + '_' + sequence.slice(curPos + 1);
    curPos = sequence.indexOf(motif);
  }

  return res;
}

console.log(motifLocator('TTCCGGAACC', 'CC'), [3, 9]);
console.log(motifLocator('ACGTTACAACGTTAG', 'ACGT'), [1, 9]);
console.log(motifLocator('ACGTACGTACGT', 'AAA'), []);
console.log(motifLocator('ACGT', 'ACGTGAC'), []);
