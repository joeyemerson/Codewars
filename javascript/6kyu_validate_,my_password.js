// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.
// Must contain only alphanumeric characters.
// Must contain letters and numbers.

function validPass(password) {
  let response;

  switch (true) {
    case password.length < 3 || 20 < password.length:
    case /[^a-z0-9]/gi.test(password):
    case !/[a-z][0-9]|[0-9][a-z]/gi.test(password):
      response = 'INVALID';
      break;
    default:
      response = 'VALID';
  }

  return response;
}

console.log(validPass('Username123'), 'VALID');
console.log(validPass('Username'), 'INVALID');
console.log(validPass('123'), 'INVALID');
console.log(validPass('Username123!'), 'INVALID');
console.log(validPass('ThisPasswordIsTooLong1234'), 'INVALID');
