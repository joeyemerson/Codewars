// The aim of this kata is to write function drawACross which returns a cross shape with 'x' characters on a square grid of size and height of our sole input n. All non-'x' characters in the grid should be filled with a space character (" ").

// For example for drawACross(7), the function should draw the following grid:

// x     x
//  x   x
//   x x
//    x
//   x x
//  x   x
// x     x

// The arms of the cross must only intersect through one central 'x' character, and start in the corner of the grid, so for even values of n, return "Centered cross not possible!"

// If n<3, function should return "Not possible to draw cross for grids less than 3x3!"

const drawACross = n => {
  if (n < 3) return 'Not possible to draw cross for grids less than 3x3!';
  if (n % 2 === 0) return 'Centered cross not possible!';

  const rows = [];
  const halfSize = Math.floor(n / 2);
  const middleRow = `\n${' '.repeat(halfSize)}x${' '.repeat(halfSize)}\n`;

  for (let i = 0; i < halfSize; i++) {
    rows.push(`${' '.repeat(i)}x${' '.repeat(n - 2 - i * 2)}x${' '.repeat(i)}`);
  }

  return rows.join('\n') + middleRow + rows.reverse().join('\n');
};

console.log(
  drawACross(7),
  '\n',
  'x     x\n x   x \n  x x  \n   x   \n  x x  \n x   x \nx     x',
  '\n-----------------------------------'
);

console.log(
  drawACross(15),
  '\n',
  'x             x\n x           x \n  x         x  \n   x       x   \n    x     x    \n     x   x     \n      x x      \n       x       \n      x x      \n     x   x     \n    x     x    \n   x       x   \n  x         x  \n x           x \nx             x',
  '\n-----------------------------------'
);

console.log(
  drawACross(25),
  '\n',
  'x                       x\n x                     x \n  x                   x  \n   x                 x   \n    x               x    \n     x             x     \n      x           x      \n       x         x       \n        x       x        \n         x     x         \n          x   x          \n           x x           \n            x            \n           x x           \n          x   x          \n         x     x         \n        x       x        \n       x         x       \n      x           x      \n     x             x     \n    x               x    \n   x                 x   \n  x                   x  \n x                     x \nx                       x',
  '\n-----------------------------------'
);

console.log(drawACross(6), '\n', 'Centered cross not possible!', '\n-----------------------------------');

console.log(drawACross(10), '\n', 'Centered cross not possible!', '\n-----------------------------------');

console.log(
  drawACross(2),
  '\n',
  'Not possible to draw cross for grids less than 3x3!',
  '\n-----------------------------------'
);
