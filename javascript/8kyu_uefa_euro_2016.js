// Finish the uefaEuro2016() function so it returns a string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores) {
  const hostTeam = teams[0];
  const visitingTeam = teams[1];
  const winningTeam = scores[0] > scores[1] ? teams[0] : scores[0] < scores[1] ? teams[1] : null;
  const result = winningTeam ? `${winningTeam} won!` : 'teams played draw.';

  return `At match ${hostTeam} - ${visitingTeam}, ${result}`;
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), 'At match Germany - Ukraine, Germany won!');
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), 'At match Belgium - Italy, Italy won!');
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), 'At match Portugal - Iceland, teams played draw.');
