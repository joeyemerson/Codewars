// Multiply two numbers! Simple!
// Rules

//     The arguments are passed as strings.
//     The numbers will be very large
//     The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. "-01.300"
//     Answer should be returned as string
//     The returned answer should not have leading or trailing zeroes (when applicable) e.g. "0123" and "1.100" are
//     wrong, they should be "123" and "1.1"
//     Zero should not be signed and "-0.0" should be simply returned as "0".

function multiply(a, b) {
  return String(parseFloat(a) * parseFloat(b));
}

console.log(multiply('2', '3'), '6');
console.log(multiply('30', '69'), '2070');
console.log(multiply('11', '85'), '935');
console.log(multiply('-0.00', '0.0000'), '0');
console.log(multiply('-0.01', '0.0000'), '0');
console.log(multiply('2.01', '3.0000'), '6.03');
console.log(multiply('2', '-3.000001'), '-6.000002');
console.log(multiply('-5.0908', '-123.1'), '626.67748');
