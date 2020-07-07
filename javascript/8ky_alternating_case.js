// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as
// to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language;
// see the initial solution for details) such that each lowercase letter becomes
// uppercase and each uppercase.

// Convert str to arr and use map to convert case
String.prototype.toAlternatingCase = function () {
  return [...this]
    .map(char => {
      if (char.toLowerCase() === char) return char.toUpperCase();
      else return char.toLowerCase();
    })
    .join('');
};

// Use built-in String.prototype.replace method
String.prototype.toAlternatingCase = function () {
  return this.replace(/[a-z]/gi, match => {
    if (match === match.toLowerCase()) return match.toUpperCase();
    else return match.toLowerCase();
  });
};

// Use for loop
String.prototype.toAlternatingCase = function () {
  let output = '';

  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()) output += this[i].toUpperCase();
    else output += this[i].toLowerCase();
  }

  return output;
};

console.log('hello world'.toAlternatingCase() === 'HELLO WORLD');
console.log('HELLO WORLD'.toAlternatingCase() === 'hello world');
console.log('hello WORLD'.toAlternatingCase() === 'HELLO world');
console.log('HeLLo WoRLD'.toAlternatingCase() === 'hEllO wOrld');
console.log('12345'.toAlternatingCase() === '12345');
console.log('1a2b3c4d5e'.toAlternatingCase() === '1A2B3C4D5E');
console.log('String.prototype.toAlternatingCase'.toAlternatingCase() === 'sTRING.PROTOTYPE.TOaLTERNATINGcASE');
console.log('Hello World'.toAlternatingCase().toAlternatingCase() === 'Hello World');
