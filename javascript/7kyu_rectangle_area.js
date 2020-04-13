// Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

function area(diagonal, length) {
  if (diagonal <= length) return 'Not a rectangle';

  // length^2 + width^2 = diagonal^2
  // diagonal^2 - length^2 = width^2
  const width = (diagonal ** 2 - length ** 2) ** 0.5;
  const area = width * length;

  return ~~area === area ? area : +area.toFixed(2);
}

console.log(area(5, 4), 12);
console.log(area(10, 6), 48);
console.log(area(13, 5), 60);
console.log(area(12, 5), 54.54);
