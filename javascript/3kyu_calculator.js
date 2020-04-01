// Create a simple calculator that given a string of operators +, -, *, / and numbers separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7

// Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.

class Calculator {
  evaluate(str) {
    const mulDiv = /(\S+) ([/*]) (\S+)/;
    const addSub = /(\S+) ([+-]) (\S+)/;

    while (mulDiv.test(str)) {
      str = str.replace(mulDiv, (_, n1, op, n2) => (op === '*' ? n1 * n2 : n1 / n2));
    }

    while (addSub.test(str)) {
      str = str.replace(addSub, (_, n1, op, n2) => (op === '+' ? +n1 + +n2 : n1 - n2));
    }

    return str;
  }
}

// good no regex option
const Calc = function() {
  this.operation = {
    '+': (a, b) => +a + +b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };

  this.evaluate = str => {
    const args = str.split(' ');
    ['/', '*', '-', '+'].forEach(op => {
      while ((i = args.indexOf(op)) !== -1) {
        const [n1, n2] = [args[i - 1], args[i + 1]];
        args[i - 1] = this.operation[op](n1, n2);
        args.splice(i, 2);
      }
    });
    return args[0];
  };
};

// const calculate = new Calculator();
const calculate = new Calc();
console.log(calculate.evaluate('127'), 127);
console.log(calculate.evaluate('2 + 3'), 5);
console.log(calculate.evaluate('2 - 3 - 4'), -5);
console.log(calculate.evaluate('10 * 5 / 2'), 25);
console.log(calculate.evaluate('64 / 92 + 43 * 84 / 94 * 80'), 3074.7382053654023);
console.log(
  calculate.evaluate('30 + 92 - 6 - 44 - 12 / 50 + 16 + 38 * 87 / 81 * 21 * 37 * 80 + 96 * 7 - 77 / 59'),
  2537807.343804143
);
