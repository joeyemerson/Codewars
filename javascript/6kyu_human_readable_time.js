// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(s) {
  const hours = s / 3600;
  const minutes = (s % 3600) / 60;
  const seconds = s % 60;
  return [hours, minutes, seconds]
    .map(val =>
      Math.floor(val)
        .toString()
        .padStart(2, '0')
    )
    .join(':');
}

console.log(humanReadable(0), '00:00:00');
console.log(humanReadable(5), '00:00:05');
console.log(humanReadable(60), '00:01:00');
console.log(humanReadable(86399), '23:59:59');
console.log(humanReadable(359999), '99:59:59');
