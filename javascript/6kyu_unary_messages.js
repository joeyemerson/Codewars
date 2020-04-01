// Binary with 0 and 1 is good, but binary with only 0 is even better! Originally, this is a concept designed by Chuck Norris to send so called unary messages.

// Can you write a program that can send and receive this messages?
// Rules

//     The input message consists of ASCII characters between 32 and 127 (7-bit)
//     The encoded output message consists of blocks of 0
//     A block is separated from another block by a space
//     Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
//         First block is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
//         The number of 0 in the second block is the number of bits in the series

// Example
// Let’s take a simple example with a message which consists of only one character (Letter 'C').
// 'C' in binary is represented as 1000011, so with Chuck Norris’ technique this gives:

//     0 0 - the first series consists of only a single 1
//     00 0000 - the second series consists of four 0
//     0 00 - the third consists of two 1

// So 'C' is coded as: 0 0 00 0000 0 00

// Second example, we want to encode the message "CC" (i.e. the 14 bits 10000111000011) :

//     0 0 - one single 1
//     00 0000 - four 0
//     0 000 - three 1
//     00 0000 - four 0
//     0 00 - two 1

// So "CC" is coded as: 0 0 00 0000 0 000 00 0000 0 00

function send(text) {
  const res = [];
  const binary = [];

  for (const c of text) {
    binary.push(
      c
        .charCodeAt(0)
        .toString(2)
        .padStart(7, '0')
    );
  }

  const series = binary.join('').match(/0+|1+/g);
  series.forEach(s => {
    const prefix = s[0] === '0' ? '00' : '0';
    res.push(prefix);
    res.push('0'.repeat(s.length));
  });

  return res.join(' ');
}

function receive(text) {
  const res = [];
  const binary = [];
  const series = text.match(/0+\s0+/g);

  series.forEach(s => {
    const parts = s.split(' ');
    const prefix = parts[0];
    const len = parts[1].length;
    binary.push((prefix.length === 1 ? '1' : '0').repeat(len));
  });

  const charCodes = binary
    .join('')
    .match(/[01]{7}/g)
    .map(bits => parseInt(bits, 2));
  charCodes.forEach(code => res.push(String.fromCharCode(code)));

  return res.join('');
}

console.log(send('C') === '0 0 00 0000 0 00');
console.log(send('CC') === '0 0 00 0000 0 000 00 0000 0 00');
console.log(send('%') === '00 0 0 0 00 00 0 0 00 0 0 0');
console.log(
  send("Chuck Norris' keyboard has 2 keys: 0 and white space.") ===
    '0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 000 00 0 0 00 00 0 0 0000000 00 00 0 0 00 0 0 000 00 00 0 0 00 0 0 00 00 0 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00 0 000 00 0 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 000 00 000 0 0 00 0 0 00 00 0 0 000000 00 0000 0 0000 00 00 0 0 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 00 00 0 0 0 00 000 0 00 00 0000 0 0000 00 00 0 00 00 0 0 0 00 000000 0 00 00 00 0 0 00 00 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 0000 00 00 0 00 00 0 0 000 00 0 0 0 00 00 0 0 00 000000 0 00 00 00000 0 0 00 00000 0 00 00 0000 0 000 00 0 0 000 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 000 00 0 0 00000 00 0 0 0 00 000 0 00 00 0 0 0 00 00 0 0000 00 0 0 0 00 00 0 00 00 00 0 0 00 0 0 0 00 0 0 0 00 00000 0 000 00 00 0 00000 00 0000 0 00 00 0000 0 000 00 000 0 0000 00 00 0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0'
);

console.log(receive('0 0 00 0000 0 00') === 'C');
console.log(receive('0 0 00 0000 0 000 00 0000 0 00') === 'CC');
console.log(receive('00 0 0 0 00 00 0 0 00 0 0 0') === '%');
console.log(
  receive(
    '0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 000 00 0 0 00 00 0 0 0000000 00 00 0 0 00 0 0 000 00 00 0 0 00 0 0 00 00 0 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00 0 000 00 0 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 000 00 000 0 0 00 0 0 00 00 0 0 000000 00 0000 0 0000 00 00 0 0 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 00 00 0 0 0 00 000 0 00 00 0000 0 0000 00 00 0 00 00 0 0 0 00 000000 0 00 00 00 0 0 00 00 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 0000 00 00 0 00 00 0 0 000 00 0 0 0 00 00 0 0 00 000000 0 00 00 00000 0 0 00 00000 0 00 00 0000 0 000 00 0 0 000 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 000 00 0 0 00000 00 0 0 0 00 000 0 00 00 0 0 0 00 00 0 0000 00 0 0 0 00 00 0 00 00 00 0 0 00 0 0 0 00 0 0 0 00 00000 0 000 00 00 0 00000 00 0000 0 00 00 0000 0 000 00 000 0 0000 00 00 0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0'
  ) === "Chuck Norris' keyboard has 2 keys: 0 and white space."
);
