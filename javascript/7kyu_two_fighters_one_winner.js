// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Example:

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;

  while (true) {
    defender.health -= attacker.damagePerAttack;
    if (defender.health <= 0) return attacker.name;

    [attacker, defender] = [defender, attacker];
  }
}

console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'), 'Lew');
console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry'), 'Harry');
console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harry'), 'Harald');
console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harald'), 'Harald');
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Jerry'), 'Harald');
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Harald'), 'Harald');
