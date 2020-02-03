// If you have ever listened to an audiobook or podcast, you may have had the option to change the play speed of the audio. This allows you to increase or decrease the speed that you listen to your content.

// I want you to calculate the time it takes to listen to the audio when the play speed is varied. The time should be rounded down to whole seconds.

// The inputs will be:

// audioLength /* a string of the total time of the audio, "hh:mm:ss" */

// playSpeed /* a float between 0.5 and 3.0, only to 1 decimal point */

// Examples:

// The results of calculations on the time units are expected to be truncated/floored

// speedListen("00:00:55", 2) => "00:00:27" // NOT "00:00:28"

// speedListen("01:20:00", 1.5) => "00:53:20"

function pad(num) {
  return num.toString().padStart(2, '0');
}

function secondsToTimestamp(seconds) {
  const hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(Math.trunc(seconds))}`;
}

function speedListen(audioLength, playSpeed) {
  const parts = audioLength.split(':'),
    hours = Number(parts[0]),
    minutes = Number(parts[1]),
    seconds = Number(parts[2]),
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return secondsToTimestamp(totalSeconds / playSpeed);
}

console.log(speedListen('00:30:00', 2), '00:15:00');
console.log(speedListen('01:20:00', 1.5), '00:53:20');
