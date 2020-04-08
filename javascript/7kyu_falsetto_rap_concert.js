// No Story
// No Description
// Only by Thinking and Testing
// Look at result of testcase, guess the code!

function testit(encodedString) {
  let decodedString = '';

  for (let i = 0; i < encodedString.length; i++) {
    if (!/[a-z]/i.test(encodedString[i])) {
      decodedString += encodedString[i];
    } else if (i % 2 === 0) {
      decodedString +=
        encodedString[i] === 'Z'
          ? 'A'
          : encodedString[i] === 'z'
          ? 'a'
          : String.fromCharCode(encodedString.charCodeAt(i) + 1);
    } else {
      decodedString +=
        encodedString[i] === 'A'
          ? 'Z'
          : encodedString[i] === 'a'
          ? 'z'
          : String.fromCharCode(encodedString.charCodeAt(i) - 1);
    }
  }

  return decodedString;
}

console.log(
  testit('Xp Zn, Dgfbl ugjr nvs! Fufqz ohhgu jm lz eqfznr') === 'Yo Yo, Check this out! Every night in my dreams'
);
console.log(testit('Ni zdbg! J tdf znv, H efdm znv') === 'Oh yeah! I see you, I feel you');
console.log(
  testit('Ovs xpts izoct vo! Ugbs ht inx J lmpv xpt fp pm') === 'Put your hands up! That is how I know you go on'
);
console.log(testit('Bplf pm dwdsxcnex! Gzs bbsntr sid cjruzobf') === 'Come on everybody! Far across the distance');
console.log(testit('Kjrudo vo! Bme tobbfr afsxdfm tt') === 'Listen up! And spaces between us');
console.log(testit('Obqux sjlf! Xpt gbuf dnnd sp tgpv xpt fp pm') === 'Party time! You have come to show you go on');
