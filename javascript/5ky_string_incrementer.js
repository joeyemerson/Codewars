// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(input) {
  let incrementedString;

  if (isNaN(parseInt(input.slice(-1)))) {
    incrementedString = input + '1';
  } else {
    const [letters, num] = input.match(/[a-z]+|\d+/gi);
    const incrementedNum = (parseInt(num) + 1).toString().padStart(num.length, '0');
    incrementedString = letters + incrementedNum;
  }

  return incrementedString;
}

console.log(incrementString('foobar000'), 'foobar001');
console.log(incrementString('foo'), 'foo1');
console.log(incrementString('foobar001'), 'foobar002');
console.log(incrementString('foobar99'), 'foobar100');
console.log(incrementString('foobar099'), 'foobar100');
console.log(incrementString(''), '1');
