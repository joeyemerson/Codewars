// #Task

// This time you need to write a regular expression that matches all URL contained in the string.

// The rules:

// 1) URL start with ```http:// or https://```

// 2) URL end with ```.com``` or ```.net```

// 3) The middle part of URL can use letters, numbers and dots

// 4) Need to ignore case, and a string may contain multiple URLs

// 5) Your regular expression name should be ```regex``` and your result should be a string array.

// Some examples:
// ```
// "http://codewars.com".match(regex)
// should return [ 'http://codewars.com' ]
// "http://www.codewars.com".match(regex)
// should return [ 'http://www.codewars.com' ]
// "HTTP://CODEWARS.COM".match(regex)
// should return [ 'HTTP://CODEWARS.COM' ]
// "https://www.codewars.com".match(regex)
// should return [ 'https://www.codewars.com' ]
// "http://www.codewars.net".match(regex)
// should return [ 'http://www.codewars.net' ]
// "1234http://www.codewars.comabcd".match(regex)
// should return [ 'http://www.codewars.com' ]
// "http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex)
// should return [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]
// "http://www.codewars.com.net".match(regex)
// should return [ 'http://www.codewars.com.net' ]
// "http://www.codewars.com.fak".match(regex)
// should return [ 'http://www.codewars.com' ]

// These examples should return null:
// "ftp://www.codewars.com".match(regex)
// "http://www.code#wars.com".match(regex)
// "http://wwwcodewarscom".match(regex)
// "http://www.codewars.org".match(regex)
// "http://www . codewars . com".match(regex)
// "http://mail@codewars.com".match(regex)
// ```

// Hint: to match ```"/"``` and ```"."```, you should use ```"\/"``` and ```"\."```
// ```"\"``` is the escape character, we will learn it in the next lesson.

const regex = /https?:\/\/[a-z0-9\.]+\.(?:com|net)/gi;

console.log('http://codewars.com'.match(regex), ['http://codewars.com']);
console.log('http://www.codewars.com'.match(regex), ['http://www.codewars.com']);
console.log('HTTP://CODEWARS.COM'.match(regex), ['HTTP://CODEWARS.COM']);
console.log('https://www.codewars.com'.match(regex), ['https://www.codewars.com']);
console.log('http://www.codewars.net'.match(regex), ['http://www.codewars.net']);
console.log('1234http://www.codewars.comabcd'.match(regex), ['http://www.codewars.com']);
console.log('http://www.codewars1.com!@#$%http://www.codewars2.net'.match(regex), [
  'http://www.codewars1.com',
  'http://www.codewars2.net'
]);
console.log('http://www.codewars1.comabchttp://www.codewars2.net'.match(regex), [
  'http://www.codewars1.com',
  'http://www.codewars2.net'
]);
console.log('http://www.codewars.com.net'.match(regex), ['http://www.codewars.com.net']);
console.log('http://www.codewars.com.fak'.match(regex), ['http://www.codewars.com']);

console.log('ftp://www.codewars.com'.match(regex), null);
console.log('http://www.code#wars.com'.match(regex), null);
console.log('http://www.codewars.org'.match(regex), null);
console.log('http://www . codewars . com'.match(regex), null);
console.log('http://mail@codewars.com'.match(regex), null);
console.log('http://.com'.match(regex), null);
