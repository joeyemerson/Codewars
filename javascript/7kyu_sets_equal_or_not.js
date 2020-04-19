// Set objects are new JavaScript built-in objects defined since ECMAScript 2015

// A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT
// some "Set operations" are missing, like equality.

// Two sets ( A, B ) are considered "equal" if all elements of A are elements of B and all elements of B are elements
// of A no matter "order" of elements.

// Examples:
//   {1, 2} == {2, 1}
//   {1, 2} != {1, 2, 3}

// Task
// Create 2 functions, areEqual and notEqual, getting 2 sets as arguments and returning a true or false depending if these 2 sets are "equal" (respectively not equal) ie : if all elements of 1st set are elements of 2d and all elements of 2d set are elements of 1st.
// Examples:

// A  = new Set([1,2]);
// A2 = new Set([2,1]);
// B  = new Set([2,3]);

// areEqual(A,B)  // -> false
// areEqual(A,A2) // -> true
// notEqual(A,B)  // -> true

function areEqual(s1, s2) {
  if (s1.size !== s2.size) return false;
  for (item of s1) {
    if (!s2.has(item)) return false;
  }
  return true;
}

function areEqual(s1, s2) {
  return s1.size === s2.size && [...s1].every(item => s2.has(item));
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

let A1 = new Set([1, 2, 3]),
  A2 = new Set([3, 2, 1]),
  B = new Set([1, 2, 5]);

console.log(areEqual(A1, A1), 'A == A');
console.log(areEqual(A1, A2), '{1,2,3} == {3,2,1}');
console.log(areEqual(A2, A1), '{3,2,1} == {1,2,3}');
console.log(!areEqual(A1, B), '{1,2,3} != {1,2,5}');

console.log(notEqual(A1, B), '{1,2,3} != {1,2,5}');
console.log(notEqual(A1, new Set()), '{1,2,3} != {}');
console.log(!notEqual(A1, A2), '{1,2,3} == {3,2,1}');
