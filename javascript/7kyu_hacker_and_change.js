// John is a hacker, he always believed,"Knowledge can change the destiny".

// He is ready to invade a supermarket checkout system. say concretely, his goal is the supermarket cash receipts and payments software.

// The basic function of the software is:

// Accept three parameters:

// ```name```, a string, customer name

// ```items```, an array, the price list of all the goods purchased by the customer. All elements in the array are numbers, up to two decimal places.

// ```payment```, a number, cash paid by customer

// return a number, the change returned to customer, up to two decimal places. When the cash paid by the customer is insufficient, the return is negative.

// John added a rule based on this:

// When the customer name is "John"

// If the result >0, the decimal portion is doubled.

// for example:

// ```
// change("John",[1.1,2.2,3.3],10)
// John bought three pieces of goods,
// the total value is 1.1+2.2+3.3=6.6, payment is 10
// The cashier should give John the change 3.4
// But due to a "small fault", the change became 3+0.4*2=3.8
// ```
// If the result <=0, return 0.

// for example:
// ```
// change("John",[11],10)
// John bought one good=11, payment is 10, result=-1
// It means John needs to give the cashier 1
// But due to a "small fault", the change became 0
// John doesn't need to pay the cashier
// ```
// So John can save a lot of money, God bless the police will not catch him ;-)

const change = (name, items, payment) => {
  const totalDue = items.reduce((a, b) => a + b);
  let change;
  if (name === 'John') {
    change = payment - totalDue;
    change = change + (change - Math.trunc(change));
    return 0 <= change ? +change.toFixed(2) : 0;
  }
  return +(payment - totalDue).toFixed(2);
};

console.log(change('Superman', [1.1, 2.2, 3.3], 10), 3.4);
console.log(change('Superman', [1.12, 2.24, 3.3], 10), 3.34);
console.log(change('Superman', [11], 10), -1);
console.log(change('John', [1.1, 2.2, 3.3], 10), 3.8);
console.log(change('John', [1.12, 2.24, 3.3], 10), 3.68);
console.log(change('John', [11], 10), 0);
console.log(change('Xmen', [7.82, 6.95, 2.98, 7.84, 7.44, 1.47, 8.91, 0.02, 2.9, 3.21, 4.94, 8.37], 50), -12.85);
