// Implement String#eight_bit_number?, which should return true if given object is a number representable by 8 bit unsigned integer (0-255), false otherwise.

// It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.

String.prototype.eightBitNumber = function() {
  const regex = /^(?:[1-9]?[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
  return regex.test(this);
};

console.log(''.eightBitNumber() == false);
console.log('0'.eightBitNumber() == true);
console.log('00'.eightBitNumber() == false);
console.log('55'.eightBitNumber() == true);
console.log('042'.eightBitNumber() == false);
console.log('123'.eightBitNumber() == true);
console.log('255'.eightBitNumber() == true);
console.log('256'.eightBitNumber() == false);
console.log('999'.eightBitNumber() == false);
