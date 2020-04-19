// Array Exchange and Reversing

// It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way
// that their new content is also reversed.

// before
// const myArray = ['a', 'b', 'c'];
// const otherArray = [1, 2, 3];

// exchangeWith(myArray, otherArray);

// after
// myArray => [3, 2, 1]
// otherArray => ['c', 'b', 'a']

function exchangeWith(a, b) {
  const lenA = a.length;
  const lenB = b.length;
  const temp = a.slice();

  for (let i = 0, j = b.length - 1; 0 <= j; i++, j--) {
    a[i] = b[j];
  }

  for (let i = 0, j = temp.length - 1; 0 <= j; i++, j--) {
    b[i] = temp[j];
  }

  a.splice(lenB);
  b.splice(lenA);
}

function exchangeWith(a, b, temp = a.slice()) {
  a.splice(0, a.length, ...b.reverse());
  b.splice(0, b.length, ...temp.reverse());
}

const a = ['1', '2', '3', '4', '5', '6', '7'];
const b = ['a', 'b', 'c'];
exchangeWith(a, b);
console.log(a, ['c', 'b', 'a']);
console.log(b, ['7', '6', '5', '4', '3', '2', '1']);
