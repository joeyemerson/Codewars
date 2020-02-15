// Description

// You are using a search engine and type some keywords. For the sake of simplicity, we simplify all the keywords into one letter. For example, "abc" represents three keywords: a, b and c. We have a lot of search results, please pick out the results that contain all the keywords.

// Example:

// keywords="abc", searchResult=["ab","abc","abcd","bcd"]
// You should return: ["abc","abcd"]

// Key words can have different order, also may not be continuous and You don't need to sort them out or to remove the same result:

// keywords="abc",
// searchResult=["ab","cba","abc","axbxc","ddd","abc","cxab","aabbcc"]
// You should return: ["cba","abc","axbxc","abc","cxab","aabbcc"]

// Key words may contains uppercase letters:

// keywords="Yes",
// searchResult=["yes","Yes","Yeah","Yestoday"]
// You should return: ["Yes","Yestoday"]

// Task

// Complete function finalResult that accepts two arguments keywords and searchResult, return all valid results that contains all keywords.

// Argument keywords is always a string that contains uppercase or lowercase letters; Argument searchResult is always a string array that contains any strings.

function finalResult(keywords, results) {
  const matches = [];
  for (result of results) {
    matches.push(result);
    for (c of keywords) {
      if (!result.includes(c)) {
        matches.pop();
        break;
      }
    }
  }
  return matches;
}

console.log(finalResult('abc', ['ab', 'abc', 'abcd', 'bcd']), ['abc', 'abcd']);
console.log(finalResult('abc', ['ab', 'cba', 'abc', 'axbxc', 'ddd', 'abc', 'cxab', 'aabbcc']), [
  'cba',
  'abc',
  'axbxc',
  'abc',
  'cxab',
  'aabbcc'
]);
console.log(finalResult('Yes', ['yes', 'Yes', 'Yeah', 'Yestoday']), ['Yes', 'Yestoday']);
