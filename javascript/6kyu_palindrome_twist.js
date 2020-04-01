// Given a string, we'd like to know whether the vowels, consonants or both (assessed separately) are the same backwards as they are forwards. See examples at the bottom of this description.

// The test should be case-insensitive, and should only assess letters, ignoring spaces, numbers and other non-letter characters ("_" "*" " " "-"). Vowels are AEIOU. The letter Y is a consonant for this exercise.

// If the string doesn't have the same sequence of consonants or vowels backwards, we want to return "neither". If only the vowels are palindromic, return "vowel". If only the consonants are palindromic, return "consonant". If the vowels and the consonants in the string are palindromic, return "both".

// You can assume that all test cases will contain at least one vowel and one consonant.

// Enjoy!

// Some examples:

// "egg" would return "both", as "e" is the same backwards as it is forwards, as is "gg".

// "raCe car" would also return "both" as "rccr" and "aea" are palindromes.

// "wizard" would return "neither".

// "pea13ce" would return "vowel" as "eae" is palindromic, but "pc" is not.

// " *73_ ab" would return "both" as "a" and "b" are palindromic (according to me...)

function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

function palindrome(str) {
  const consonants = str.replace(/[aeiou]|[^a-z]/gi, '').toLowerCase();
  const vowels = str.replace(/[^aeiou]/gi, '').toLowerCase();

  if (isPalindrome(consonants)) {
    if (isPalindrome(vowels)) return 'both';
    return 'consonant';
  } else if (isPalindrome(vowels)) {
    return 'vowel';
  } else {
    return 'neither';
  }
}

console.log(palindrome('egg'), 'both');
console.log(palindrome('raCe car'), 'both');
console.log(palindrome('wizard'), 'neither');
console.log(palindrome('pea13ce'), 'vowel');
console.log(palindrome(' *73_ ab'), 'both');
console.log(palindrome('3-B0oto b'), 'both');
console.log(palindrome('_inte 4'), 'neither');
console.log(palindrome('neither'), 'vowel');
