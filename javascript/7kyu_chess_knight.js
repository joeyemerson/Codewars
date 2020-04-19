// Task

// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares
// vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out
// the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// Example

// For cell = "a1", the output should be 2.
// For cell = "c2", the output should be 6.

// Input/Output
//     [input] string cell
//     String consisting of letter+number - coordinates of the knight on an 8 × 8 chessboard in chess notation.
//     [output] an integer

function chessKnight(cell) {
  const x = cell.charCodeAt(0) - 96;
  const y = +cell[1];
  let validMoveCount = 0;

  if (x + 1 < 9) validMoveCount += (y + 2 < 9) + (y - 2 > 0);
  if (x + 2 < 9) validMoveCount += (y + 1 < 9) + (y - 1 > 0);
  if (x - 1 > 0) validMoveCount += (y + 2 < 9) + (y - 2 > 0);
  if (x - 2 > 0) validMoveCount += (y + 1 < 9) + (y - 1 > 0);

  return validMoveCount;
}

console.log(chessKnight('a1'), 2);
console.log(chessKnight('c2'), 6);
console.log(chessKnight('d4'), 8);
console.log(chessKnight('g6'), 6);
