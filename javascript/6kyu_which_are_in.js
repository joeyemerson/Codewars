// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []
// Notes:

//     Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

//     In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

//     Beware: r must be without duplicates.
//     Don't mutate the inputs.

function inArray(arr1, arr2) {
  const res = new Set();

  for (const substr of arr1) {
    for (const word of arr2) {
      if (word.includes(substr)) {
        res.add(substr);
        break;
      }
    }
  }

  return Array.from(res).sort();
}

a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

a1 = ['xyz', 'live', 'strong'];
console.log(inArray(a1, a2), ['live', 'strong']);

a1 = ['live', 'strong', 'arp'];
console.log(inArray(a1, a2), ['arp', 'live', 'strong']);

a1 = ['tarp', 'mice', 'bull'];
console.log(inArray(a1, a2), []);
