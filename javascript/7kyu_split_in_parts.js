// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'

// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

const splitInParts = (s, l) => {
  const parts = [];
  let i = 0;
  while (i < s.length) {
    let count = 0;
    let part = '';
    while (count < l && s[i]) {
      part += s[i];
      i++;
      count++;
    }
    parts.push(part);
  }
  return parts.join(' ');
};

console.log(splitInParts('supercalifragilisticexpialidocious', 3) === 'sup erc ali fra gil ist ice xpi ali doc iou s');
console.log(splitInParts('HelloKata', 1) === 'H e l l o K a t a');
console.log(splitInParts('HelloKata', 9) === 'HelloKata');
