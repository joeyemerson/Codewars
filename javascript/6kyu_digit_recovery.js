// Digit Recovery

// Some letters in the input string are representing a written-out digit. Some of the letters may randomly shuffled.
// Your task is to recover them all.

// Note that:

//     Only consecutive letters can be used. "OTNE" cannot be recovered to 1!
//     Every letter has to start with an increasing index.. "ONENO" results to 11, because the E can be used two times.
//     Endless loops are not possible!
//     If there are letters in the string, which don't create a number you can ignore them.
//     If no digits can be found, return "No digits found"
//     Take care about the order! "ENOWT" will be recovered to 12 and not to 21.
//     The input string consists only UpperCase letters

// e.g.
// recover("NEO") =>  "1"
// recover("ONETWO") => "12"
// recover("ONENO") => "11"
// recover("TWWTONE") => "21"
// recover("ZYX") => "No digits found"
// recover("NEOTWONEINEIGHTOWSVEEN") => "12219827"

// You can use the following preloaded dictionary in your solution:

const alph = { ZERO: 0, ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, SIX: 6, SEVEN: 7, EIGHT: 8, NINE: 9 };

function recover(str) {
  let recoveredDigits = '';

  for (let i = 0; i < str.length; i++) {
    for (const key of Object.keys(alph)) {
      if (hasAllSameCharacters(key, str.slice(i, i + key.length))) {
        recoveredDigits += alph[key];
        break;
      }
    }
  }

  return recoveredDigits || 'No digits found';
}

function hasAllSameCharacters(str, substr) {
  for (const char of str) {
    if (substr.includes(char)) {
      substr = substr.replace(char, '');
    } else {
      return false;
    }
  }
  return true;
}

console.log(recover('NEO'), '1');
console.log(recover('ONETWO'), '12');
console.log(recover('TWWTONE'), '21');
console.log(recover('ZYX'), 'No digits found');
console.log(recover('ONENO'), '11');
console.log(recover('NEOTWONEINEIGHTOWSVEEN'), '12219827');
