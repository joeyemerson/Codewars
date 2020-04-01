// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

// Invalid arrays

// If we change the first number to something else, comp may not return true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

// comp(a,b) returns false because in b 36100 is not the square of any number of a.
// Remarks

// a or b might be [] (all languages except R, Shell). a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).

// If a or b are nil (or null or None), the problem doesn't make sense so return false.

// If a or b are empty then the result is self-evident.

// a or b are empty or not empty lists.

function comp(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    if (Math.pow(arr1[i], 2) !== arr2[i]) return false;
  }

  return true;
}

let a1, a2;

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2), true);

// no arguments passed
console.log(comp(), false);

// different lengths
a1 = [121, 144];
a2 = [11 * 11, 121 * 121, 144 * 144];
console.log(comp(a1, a2), false);
