// Write

// String.prototype.formatWith = function () {}

// that takes in a list of arguments and formats the string based off these arguments and indices.

// For example:

// 'Hello {0}'.formatWith('Codewars') ===  'Hello Codewars'
// '{0} + {0} = {1}'.formatWith('1','2') ===  '1 + 1 = 2'
// 'Testing {1}'.formatWith('kata') === 'Testing {1}' // there is no arguments at position 1

String.prototype.formatWith = function(...args) {
  return this.replace(/\{(\d+)\}/g, (match, digit) => (digit < args.length ? args[digit] : match));
};

console.log('Hello {0}'.formatWith('Codewars'), 'Hello Codewars');
console.log('{0} is a {1} {2}'.formatWith('Today', 'good', 'day'), 'Today is a good day');
console.log('{0} + {0} = {1}'.formatWith('1', '2'), '1 + 1 = 2');
console.log(
  'Hello {0}. This {1} is bring a {2} to work day'.formatWith('World', 'Monday', 'dog'),
  'Hello World. This Monday is bring a dog to work day'
);
console.log('Testing {1}'.formatWith('kata'), 'Testing {1}');
