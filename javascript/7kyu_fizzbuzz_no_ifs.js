// Task

// You need to implement a function that applies the standard fizz buzz test:

//     If a number is divisible by 3, return Fizz
//     If it is divisible by 5, return Buzz
//     If it is divisible by both 3 and 5, return FizzBuzz
//     If it is not divisible by 3 or 5, return the number itself

// However, when making the function, you cannot use if (meaning else is also not an option).
// Input

//     A number will always be provided
//     The number provided will always be positive and an integer

// Examples

//     6 should return Fizz
//     10 should return Buzz
//     15 should return FizzBuzz
//     17 should return 17

const fizzBuzz = n => (n % 15 ? (n % 5 ? (n % 3 ? n : 'Fizz') : 'Buzz') : 'FizzBuzz');

const fizzBuzz2 = n => {
  const fizzOrBuzz = {
    [n % 3 === 0]: 'Fizz',
    [n % 5 === 0]: 'Buzz',
    [n % 15 === 0]: 'FizzBuzz',
  };
  return fizzOrBuzz[true] || n;
};

const fizzBuzz3 = n => {
  return (n % 15 === 0 && 'FizzBuzz') || (n % 3 === 0 && 'Fizz') || (n % 5 == 0 && 'Buzz') || n;
};

console.log(fizzBuzz(1), 1);
console.log(fizzBuzz(3), 'Fizz');
console.log(fizzBuzz(6), 'Fizz');
console.log(fizzBuzz(7), 7);
console.log(fizzBuzz(10), 'Buzz');
console.log(fizzBuzz(30), 'FizzBuzz');
