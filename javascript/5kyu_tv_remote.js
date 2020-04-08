// Background

// My TV remote control has arrow buttons and an OK button.

// I can use these to move a "cursor" on a logical screen keyboard to type words...
// Keyboard

//     aA# is the SHIFT key. Pressing this key cycles through THREE keypad modes.
//         Mode 1 = alpha-numeric keypad with lowercase alpha (as depicted above)
//         Mode 2 = alpha-numeric keypad with UPPERCASE alpha
//         Mode 3 = symbolic keypad (as depicted above)

//     SP is the space character
//     The other (solid fill) keys in the bottom row have no function

// Special Symbols

// For your convenience, here are Unicode values for the less obvious symbols of the Mode 3 keypad
// ¡ = U-00A1	£ = U-00A3	¤ = U-00A4	¥ = U-00A5
// § = U-00A7	¿ = U-00BF	€ = U-20AC
// Kata task

// How many button presses on my remote are required to type the given words?
// Notes

//     The cursor always starts on the letter a (top left)
//     The inital keypad layout is Mode 1
//     Remember to also press OK to "accept" each letter
//     Take the shortest route from one letter to the next
//     The cursor wraps, so as it moves off one edge it will reappear on the opposite edge
//     Although the blank keys have no function, you may navigate through them if you want to
//     Spaces may occur anywhere in the words string

//     Do not press the SHIFT key until you need to. For example, with the word e.Z, the SHIFT change happens after the . is pressed (not before). In other words, do not try to optimize total key presses by pressing SHIFT early.

// Example

// words = Too Easy?

//     T => a-aA#-OK-U-V-W-X-Y-T-OK = 9
//     o => T-Y-X-W-V-U-aA#-OK-OK-a-b-c-d-e-j-o-OK = 16
//     o => o-OK = 1
//     space => o-n-m-l-q-v-SP-OK = 7
//     E => SP-aA#-OK-A-3-2-1--E-OK = 8
//     a => E-1-2-3-A-aA-OK-OK-a-OK = 9
//     s => a-b-c-d-i-n-s-OK = 7
//     y => s-x-y-OK = 3
//     '?' => y-x-w-v-u-aA#-OK-OK-^-~-?-OK = 11

// Answer = 9 + 16 + 1 + 7 + 8 + 9 + 7 + 3 + 11 = 71

const MODES = {
  1: [
    ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
    ['SHIFT', ' ']
  ],
  2: [
    ['A', 'B', 'C', 'D', 'E', '1', '2', '3'],
    ['F', 'G', 'H', 'I', 'J', '4', '5', '6'],
    ['K', 'L', 'M', 'N', 'O', '7', '8', '9'],
    ['P', 'Q', 'R', 'S', 'T', , '.', '@', '0'],
    ['U', 'V', 'W', 'X', 'Y', 'Z', '_', '/'],
    ['SHIFT', ' ']
  ],
  3: [
    ['^', '~', '?', '!', "'", '"', '(', ')'],
    ['-', ':', ';', '+', '&', '%', '*', '='],
    ['<', '>', '\u20ac', '\u00a3', '$', '\u00a5', '\u00a4', '\\'],
    ['[', ']', '{', '}', ',', '.', '@', '\u00a7'],
    ['#', '\u00bf', '\u00a1', null, null, null, '_', '/'],
    ['SHIFT', ' ']
  ]
};

const COL_COUNT = 6;
const ROW_COUNT = 8;
const MODE_COUNT = Object.keys(MODES).length;
const KEYPAD = generateKeypad(MODES);

function generateKeypad(modes) {
  const generateMode = (keypad, modeLayout, mode) => {
    modeLayout.forEach((row, y) => {
      row.forEach((character, x) => {
        if (keypad[character] !== undefined) {
          keypad[character].modes.push(mode);
        } else {
          keypad[character] = { x, y, modes: [mode] };
        }
      });
    });
  };

  const keypad = {};
  for (const mode in modes) {
    generateMode(keypad, modes[mode], +mode);
  }
  return keypad;
}

function tvRemote(str) {
  let arrowPresses = 0;
  let confirmPresses = 0;
  let currentMode = 1;
  let from = KEYPAD.a;
  let to;

  for (const character of str) {
    to = KEYPAD[character];

    if (!to.modes.includes(currentMode)) {
      arrowPresses += calculateArrowPresses(from, KEYPAD.SHIFT);
      nextMode = getNextMode(currentMode, character);
      confirmPresses += calculateShiftPresses(currentMode, nextMode);
      currentMode = nextMode;
      from = KEYPAD.SHIFT;
    }

    arrowPresses += calculateArrowPresses(from, to);
    confirmPresses++;
    from = to;
  }

  return arrowPresses + confirmPresses;
}

// prettier-ignore
function calculateArrowPresses(from, to) {
  const leftRightPresses = Math.min(
    Math.abs(from.x - to.x),
    ROW_COUNT - Math.max(from.x, to.x) + Math.min(from.x, to.x)
  );

  const upDownPresses = Math.min(
    Math.abs(from.y - to.y),
    COL_COUNT - Math.max(from.y, to.y) + Math.min(from.y, to.y)
  );

  return leftRightPresses + upDownPresses;
}

function calculateShiftPresses(currentMode, nextMode) {
  return currentMode < nextMode ? nextMode - currentMode : MODE_COUNT - currentMode + nextMode;
}

function getNextMode(currentMode, nextCharacter) {
  const allModes = KEYPAD[nextCharacter].modes;
  const lowerModes = allModes.filter(mode => mode < currentMode);
  const higherModes = allModes.filter(mode => mode > currentMode);
  return higherModes.length ? Math.min(...higherModes) : Math.min(...lowerModes);
}

console.log(tvRemote('does') === 16);
console.log(tvRemote('your') === 21);
console.log(tvRemote('solution') === 33);
console.log(tvRemote('work') === 18);
console.log(tvRemote('for') === 12);
console.log(tvRemote('these') === 27);
console.log(tvRemote('words') === 23);
console.log(tvRemote('DOES') === 19);
console.log(tvRemote('YOUR') === 22);
console.log(tvRemote('SOLUTION') === 34);
console.log(tvRemote('WORK') === 19);
console.log(tvRemote('FOR') === 15);
console.log(tvRemote('THESE') === 28);
console.log(tvRemote('WORDS') === 24);
console.log(tvRemote('^does^') === 33);
console.log(tvRemote('$your$') === 53);
console.log(tvRemote('#solution#') === 49);
console.log(tvRemote('\u00bfwork\u00bf') === 34);
console.log(tvRemote('{for}') === 38);
console.log(tvRemote('\u00a3these\u00a3') === 57);
console.log(tvRemote('?symbols?') === 54);

console.log(tvRemote('b..¥B4# 2z/@Kl .w\\@.u)Q') === 141);
console.log(tvRemote('.§vi9@') === 40);
console.log(tvRemote('5&IjlO$9 &4G,3RyB\\~Nb¤ $>') === 244);
console.log(tvRemote('¥H"f#^¡ wE¿T> @9 Gd6:v l') === 176);
