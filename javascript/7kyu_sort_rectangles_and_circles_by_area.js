// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

// For example,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]

function sortByArea(shapes) {
  return shapes.slice().sort((a, b) => calculateArea(a) - calculateArea(b));
}

function calculateArea(shape) {
  const formulas = {
    circle: r => Math.PI * r ** 2,
    rectangle: wl => wl[0] * wl[1],
  };

  return formulas[getShapeType(shape)](shape);
}

function getShapeType(shape) {
  if (Array.isArray(shape)) return 'rectangle';
  if (typeof shape === 'number') return 'circle';
  return undefined;
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]), [[1.342, 3.212], 1.23, [4.23, 6.43], 3.444]);
console.log(sortByArea([[2, 5], 6]), [[2, 5], 6]);
console.log(sortByArea([]), []);
