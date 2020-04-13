//  Returns the bank account number parsed from specified string.

//  You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
//  The machine scans the paper documents, and produces a string with a bank account that looks like this:

//     _  _     _  _  _  _  _
//   | _| _||_||_ |_   ||_||_|
//   ||_  _|  | _||_|  ||_| _|

//  Each string contains an account number written using pipes and underscores.
//  Each account number should have 9 digits, all of which should be in the range 0-9.

//  Your task is to write a function that can take bank account string and parse it into actual account numbers.

//  @param {string} bankAccount
//  @return {number}

// Examples:

//    '    _  _     _  _  _  _  _ \n'+
//    '  | _| _||_||_ |_   ||_||_|\n'+     =>  123456789
//    '  ||_  _|  | _||_|  ||_| _|\n'

//    ' _  _  _  _  _  _  _  _  _ \n'+
//    '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
//    '|_||_  _||_| _||_|  ||_| _|\n',

//    ' _  _  _  _  _  _  _  _  _ \n'+
//    '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
//    '|_||_  _||_| _||_| _||_| _|\n',

const rawDigitText = ' _     _  _     _  _  _  _  _ \n| |  | _| _||_||_ |_   ||_||_|\n|_|  ||_  _|  | _||_|  ||_| _|';
const digitLookup = Array.from({ length: 10 }, val => '');

rawDigitText.split('\n').forEach(row => {
  digitRows = row.match(/.{3}/g);
  digitRows.forEach((digitRow, index) => (digitLookup[index] += digitRow));
});

function parseBankAccount(bankAccount) {
  const digitCount = bankAccount.indexOf('\n') / 3;
  const accountDigitText = Array.from({ length: digitCount }, val => '');
  const textRows = bankAccount.split('\n').slice(0, -1);

  textRows.forEach(row => {
    const digitRows = row.match(/.{3}/g);
    digitRows.forEach((digitRow, index) => (accountDigitText[index] += digitRow));
  });

  const accountDigits = accountDigitText.map(str => digitLookup.indexOf(str)).join('');

  return +accountDigits;
}

const tests = [
  {
    text: '    _  _     _  _  _  _  _ \n' + '  | _| _||_||_ |_   ||_||_|\n' + '  ||_  _|  | _||_|  ||_| _|\n',
    result: 123456789,
  },
  {
    text: ' _  _  _  _  _  _  _  _  _ \n' + '| | _| _|| ||_ |_   ||_||_|\n' + '|_||_  _||_| _||_|  ||_| _|\n',
    result: 23056789,
  },
  {
    text: ' _  _  _  _  _  _  _  _  _ \n' + '|_| _| _||_||_ |_ |_||_||_|\n' + '|_||_  _||_| _||_| _||_| _|\n',
    result: 823856989,
  },
];

for (testCase of tests) {
  console.log(parseBankAccount(testCase.text), testCase.result);
}
