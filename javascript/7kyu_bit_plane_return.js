// A greyscale digital image is supplied as a matrix of values between 0 (black) and 255 (white), each being the decimal representation of an 8-bit value. For example: a mid-grey is represented as 127 in decimal and 01111111 in binary; the subsequent value 128, is 10000000 in binary; an example of a 4 pixel digital image is: [[0, 63], [127, 255]] in decimal, or [[00000000, 00111111], [01111111, 11111111]] binary.

// Example of bit planes derived from 8-bit image

// A bit plane is a set of bits corresponding to a given bit position for each of the binary values of an image matrix. For the 4 pixel example ([[0, 63], [127, 255]]) above, bit plane 3 would be a matrix of values corresponding to the bit value at index 5 for each value of the input matrix == [[0, 1], [1, 1]]. The binary value index is mapped to the bit plane as follows:

// plane 0 => least significant bit / right-most bit == [7];

// plane 1 => [6] ... 6 => [1]... ;

// plane 7 => most significant bit / left-most bit == [0]

// The object of this kata is to return the specified bit plane (plane) for the supplied image matrix(image). For this kata you will not be supplied an empty matrix (there will always be at least one pixel) and the values within each array will always be integers between 0 and 255 inclusive. The value specified in plane will be between 0 and 7 inclusive.

function bitSlice(image, plane) {
  const bitPlane = [];
  for (let i = 0; i < image.length; i++) {
    const row = [];
    for (let j = 0; j < image[0].length; j++) {
      const binary = image[i][j].toString(2).padStart(8, '0');
      row.push(Number(binary[7 - plane]));
    }
    bitPlane.push(row);
  }
  return bitPlane;
}

// solution using bit shifting and comparison
function bitSlice2(image, plane) {
  const mask = 1 << plane;
  return image.map(row => row.map(x => (x & mask ? 1 : 0)));
}

console.log(
  bitSlice(
    [
      [68, 69, 75, 100],
      [71, 82, 106, 117],
      [119, 117, 126, 132],
      [116, 127, 146, 111]
    ],
    3
  ),
  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1]
  ]
);

console.log(
  bitSlice(
    [
      [24, 35, 49, 51, 49],
      [27, 38, 47, 50, 50],
      [32, 39, 47, 50, 53],
      [38, 45, 49, 51, 53],
      [43, 49, 49, 50, 51]
    ],
    2
  ),
  [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0]
  ]
);

console.log(
  bitSlice(
    [
      [19, 27, 38, 46, 60, 63],
      [19, 22, 30, 38, 55, 58],
      [22, 22, 22, 39, 45, 54],
      [22, 22, 21, 45, 54, 63],
      [21, 19, 21, 36, 51, 64],
      [21, 21, 19, 24, 45, 60]
    ],
    7
  ),
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]
);

console.log(
  bitSlice(
    [
      [73, 147, 208, 216, 216, 209, 175, 158],
      [66, 93, 158, 199, 206, 190, 185, 136],
      [65, 71, 123, 180, 205, 189, 170, 141],
      [63, 45, 76, 149, 198, 183, 153, 139],
      [61, 39, 51, 120, 185, 181, 149, 130],
      [58, 47, 49, 96, 161, 175, 158, 121],
      [49, 46, 46, 70, 127, 158, 160, 110],
      [36, 39, 42, 51, 99, 141, 141, 96]
    ],
    0
  ),
  [
    [1, 1, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0]
  ]
);
