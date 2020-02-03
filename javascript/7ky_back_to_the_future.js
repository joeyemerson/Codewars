// Oh no! Marty McFly was taking the DeLorean for a drive and accidentally time travelled to approximately 50 years in the past.

// The last thing he remembers is Doc Brown shouting "Marty, you must only attempt to travel back on the same day and date as you arrive, otherwise the space-time continuum will unravel! The month doesn't matter, but if you arrive on Monday 1st, you must leave on a Monday 1st or the consequences will be disastrous. The flux capacitor is only going to last until the end of the year, so if you can't travel before then, you'll be stuck in the past forever!".

// Marty doesn't have a calendar but he remembers that the days and dates for some months of the year match other months. For example if the 1st of January falls on a Monday then the 1st of October will also fall on a Monday in the same year. This is because the number of days between the two months is divisible by 7.

// He works out all the matching months in the year (note: it is not a leap year):

//     January & October
//     April & July
//     September & December
//     February & March & November

// Write a function to help Marty send a message to Doc.

// The input is a string of the date he arrived in the past: "Monday 1 January"
// If there is a matching day/date you will need to return the following string: "I'm leaving here on Monday 1 October!"

// If there is no matching day/date that year, Marty is stuck in the past and you will need to return the following string: "Doc, I can't get back to the future!"

// If there are two possible return dates, return the soonest.

function daysInMonth(month) {
  return new Date(2019, month, 0).getDate();
}

function backToTheFuture(str) {
  const matches = {
    January: 'October',
    April: 'July',
    September: 'December',
    February: 'March',
    March: 'November'
  };
  let strParts = str.split(' ');
  const dayName = strParts[0],
    dayNumber = strParts[1],
    monthName = strParts[2],
    targetMonthNumber =
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
      ].indexOf(matches[monthName]) + 1;
  if (matches.hasOwnProperty(monthName) && dayNumber <= daysInMonth(targetMonthNumber)) {
    return `I\'m leaving here on ${dayName} ${dayNumber} ${matches[monthName]}!`;
  }
  return "Doc, I can't get back to the future!";
}

console.log(backToTheFuture('Monday 3 January') === "I'm leaving here on Monday 3 October!");
console.log(backToTheFuture('Friday 20 October') === "Doc, I can't get back to the future!");
console.log(backToTheFuture('Tuesday 31 March') === "Doc, I can't get back to the future!");
console.log(backToTheFuture('Saturday 26 July') === "Doc, I can't get back to the future!");
