// We have to create a function that receives a connection string with password included and you have to mask the password i.e. change password by asterisks.

// Preconditions:

//     non empty valid url
//     password always next to string section password=
//     assume password will not contain ampersand sign for sake of simplicity
//     to make it more real it has non ASCII characters
//     "password=" and "user" will occur only once

//     empty passwords are not validated but best solutions take empty passwords into account

// Example:
// input

//     jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345

// output

//     jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****

function hidePasswordFromConnection(urlString) {
  return urlString.replace(/(password=)([^&]+)/, (m, p1, p2) => p1 + '*'.repeat(p2.length));
}

console.log(
  hidePasswordFromConnection('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345'),
  'jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****'
);
console.log(
  hidePasswordFromConnection('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?password=12345&user=root'),
  'jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?password=*****&user=root'
);
