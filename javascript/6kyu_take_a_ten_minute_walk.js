// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

const isValidWalk = directions => {
  if (directions.length !== 10) return false;

  const coords = { x: 0, y: 0 };

  for (dir of directions) {
    switch (dir) {
      case 'n':
        coords.y += 1;
        break;
      case 'e':
        coords.x += 1;
        break;
      case 's':
        coords.y -= 1;
        break;
      default:
        coords.x -= 1;
    }
  }

  return coords.x === 0 && coords.y === 0;
};

// Less readable, but fun refactor
const isValidWalk2 = walk =>
  walk.length !== 10 ? false : walk.reduce((acc, dir) => acc + { n: 1, s: -1, e: 99, w: -99 }[dir], 0) === 0;

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');
