// Background

// The boardgame Risk which has been published by Hasbro, Parker Brothers, and others in a variety of guises since the late 1950's is a game of global domination or world conquest.

// Battles between opposing players are fought as combats in which in the standard version of the game the attacker rolls between 1 and 3 six sided dice and the defender rolls either 1 or 2 six sided dice.

// The attacking and defending players' dice are paired up in order from highest to lowest, and the dice in each pair are compared against each other.

// If the attacker's die is greater than the defender's die, the defender loses one troop or army unit.

// If the attacker's die is less than or equal to the defender's die, the attacker loses one troop or army unit.

// Any remainining unpaired dice are ignored.
// Example

// The attacking player's die rolls are 2, 6 and 4.

// The defending player's die rolls are 5 and 4.

// The attacker's highest die roll of 6 is paired with the defender's highest die roll of 5, and the defending player loses a unit.

// The attacker's next highest die roll of 4 is paired with defender's remaining die roll of 4, and the attacking player loses a unit.

// The attacker's lowest die roll of 2 is ignored.
// Task

// Write a function which receives as inputs two arrays: one containing the attacker's die rolls in no particular order; the other the defender's die rolls again in no particular order, and returns the result of the battle as a two element array containing the numbers of units lost by the attacker and the defender respectively.

// Some players who find the standard game a bit too slow paced have adopted house rules for big battles in which one or both players may be permiited to roll more than 2 or 3 dice at the same time. The function should provide for this situation, and return an appropriate outcome to the big battle.

function battleOutcome(attacker, defender) {
  const losses = [0, 0];
  const len = Math.min(attacker.length, defender.length);

  attacker.sort((a, b) => b - a);
  defender.sort((a, b) => b - a);

  for (let i = 0; i < len; i++) {
    if (attacker[i] <= defender[i]) {
      losses[0] += 1;
    } else {
      losses[1] += 1;
    }
  }

  // could refactor the if statement to:
  // losses[ attacker[i] <= defender[i] ? 0 : 1 ] += 1

  return losses;
}

console.log(battleOutcome([1], [4]), [1, 0], 'Defender rolls higher.');
console.log(battleOutcome([5], [5]), [1, 0], 'Attacker and defender roll equal.');
console.log(battleOutcome([6], [3]), [0, 1], 'Attacker rolls higher.');

console.log(battleOutcome([1, 6, 2], [5]), [0, 1], 'Attacker rolls higher.');
console.log(battleOutcome([2, 3, 4], [3, 2]), [0, 2], 'Attacker rolls higher twice.');
console.log(battleOutcome([5, 2, 4], [4, 4]), [1, 1], 'Attacker and defender both roll higher');
