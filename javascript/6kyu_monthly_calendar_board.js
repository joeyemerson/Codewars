// Description

// Give you the number of year and month, make a monthly calendar board.
// Task

// Complete function calendar() that accepts two arguments year and month.

// Returns a calendar board of this month.

// Note: The first line is centered(see following example).
// Rules & Examples

// An example of calendar(2016,8)

// The first line show the Year and Month. The format should be centered. The second line show Sunday to Saturday, each one shorted to three uppercase chars, separated by spaces. The following line is days of this month. The first digit of day should under the second char of the week title.

//         2016 August
// SUN MON TUE WED THU FRI SAT
//      1   2   3   4   5   6
//  7   8   9   10  11  12  13
//  14  15  16  17  18  19  20
//  21  22  23  24  25  26  27
//  28  29  30  31

// An example of calendar(2016,2)

//        2016 February         <----- This line should be centered.
// SUN MON TUE WED THU FRI SAT         pad 7 spaces on the left
//      1   2   3   4   5   6          Don't need to pad on the right
//  7   8   9   10  11  12  13         If it can not be symmetrical
//  14  15  16  17  18  19  20         The left side can be 1 space
//  21  22  23  24  25  26  27         less than the right side.
//  28  29                      <----- Don't forget the leap year

const MONTHS = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
};

function calendar(year, month) {
  const currentDate = new Date(year, month - 1);
  const startDay = currentDate.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const titleRow = `${year} ${MONTHS[month]}`;
  const dayRow = 'SUN MON TUE WED THU FRI SAT';
  const calendar = [' '.repeat(~~((27 - titleRow.length) / 2)) + titleRow, dayRow];

  let date = 1;
  let row = Array.from({ length: startDay }, item => '   ');

  while (date <= daysInMonth) {
    while (row.length < 7) {
      if (date > daysInMonth) break;
      const dateString = date.toString();
      dateString.length === 1 ? row.push(` ${dateString}${row.length === 6 ? '' : ' '}`) : row.push(` ${dateString}`);
      date++;
    }
    calendar.push(row.join(' '));
    row = [];
  }

  return calendar.join('\n');
}

// nice solution not using the JS Date() object
function calendar(year, month) {
  let day = new Date(year, month - 1, 1).getDay();
  let firstLine =
    year +
    ' ' +
    [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ][month - 1];
  let secondLine = 'SUN MON TUE WED THU FRI SAT';
  firstLine = ' '.repeat((27 - firstLine.length) >> 1) + firstLine;

  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
  if (month == 2 && (year % 400 == 0 || (year % 100 && year % 4 == 0))) days++;

  let rest = ' '.repeat(4 * day + 1);
  for (let i = 1; i <= days; ++i) {
    rest += i;
    if (day == 6 && i < days) rest += '\n ';
    else if (i < 10) rest += '   ';
    else if (i < days) rest += '  ';
    day = (day + 1) % 7;
  }
  return [firstLine, secondLine, rest].join('\n');
}

let answer = `        2016 August
SUN MON TUE WED THU FRI SAT
     1   2   3   4   5   6
 7   8   9   10  11  12  13
 14  15  16  17  18  19  20
 21  22  23  24  25  26  27
 28  29  30  31`;
console.log(calendar(2016, 8) === answer);
console.log(calendar(2016, 8), '\n\n', answer, '\n\n');

answer = `       2016 February
SUN MON TUE WED THU FRI SAT
     1   2   3   4   5   6
 7   8   9   10  11  12  13
 14  15  16  17  18  19  20
 21  22  23  24  25  26  27
 28  29`;
console.log(calendar(2016, 2) === answer);
console.log(calendar(2016, 2), '\n\n', answer, '\n\n');

answer = `       2022 January
SUN MON TUE WED THU FRI SAT
                         1
 2   3   4   5   6   7   8
 9   10  11  12  13  14  15
 16  17  18  19  20  21  22
 23  24  25  26  27  28  29
 30  31`;
console.log(calendar(2022, 1) === answer);
console.log(calendar(2022, 1), '\n\n', answer, '\n\n');
