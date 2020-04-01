// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// prettier-ignore
const isTriangle = (a, b, c) => {
  return a + b > c &&
         a + c > b &&
         b + c > a &&
         [a, b, c].every(side => side > 0);
};

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);
