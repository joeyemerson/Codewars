// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).
// Examples

// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name) {
  const names = name.split(' ');
  if (names.length < 3) {
    return name;
  } else {
    for (i = 1; i < names.length - 1; i++) {
      names[i] = names[i][0] + '.';
    }
    return names.join(' ');
  }
}

console.log(initializeNames('Jack Ryan'), 'Jack Ryan');
console.log(initializeNames('Lois Mary Lane'), 'Lois M. Lane');
console.log(initializeNames('Dimitri'), 'Dimitri', '');
console.log(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis');
