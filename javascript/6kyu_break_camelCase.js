// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// solution("camelCasing")  ==  "camel Casing"

const solution = str => {
  const words = str.match(/^[a-z]+|[A-Z][a-z]+/g);
  return words.join(' ');
};

const splitCamelCase = str => {
  const result = [];
  let tempString = '';

  for (const char of str) {
    if (char === char.toUpperCase()) {
      result.push(tempString);
      tempString = '';
    }
    tempString += char;
  }

  return result.concat(tempString).join(' ');
};

const splitCamelCase2 = str => {
  return [...str].reduce((acc, val) => (acc += (val.charCodeAt(0) < 97 ? ' ' : '') + val), '');
};

console.log(splitCamelCase2('camelCasing'), 'camel Casing');
console.log(splitCamelCase2('camelCasingTest'), 'camel Casing Test');
