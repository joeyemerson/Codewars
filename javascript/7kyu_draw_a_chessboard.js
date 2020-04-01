// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

// Making a digital chessboard I think is an interesting way of visualising how loops can work together.

// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

// So chessBoard(6,4) should return an array like this:

// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]

// And chessBoard(3,7) should return this:

// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]

// The white spaces should be represented by an: 'O'

// and the black an: 'X'

// The first row should always start with a white space 'O'

const chessBoard = (rows, cols) => {
  const board = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push((i + j) % 2 ? 'X' : 'O');
    }
    board.push(row);
  }

  return board;
};

const chessBoard2 = (rows, cols) =>
  Array.from({ length: rows }, (_, i) => Array.from({ length: cols }, (_, j) => 'OX'[(i + j) % 2]));

console.log(chessBoard2(8, 8));
console.log(chessBoard2(15, 15));
console.log(chessBoard2(8, 12)); // check for differing row/col counts
