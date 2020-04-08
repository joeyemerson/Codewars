// Behind Enemy Lines

// It's world war 3 and a bunch of murderous AI robots have taken over the earth. Your plane has been shot down and you've crash landed deep behind enemy lines but as luck would have it, you've salvaged an autonomous heavy duty rifle from the wreckage. This fully autonomous sentinel uses an algorithm to target robots and send them straight to the scrap heap. However, the software for its targeting algorithm is corrupt. It's far too dangerous to make a run for it, so your last hopes lie in rewriting the algorithm!

// This algorithm will accept a 2D array of enemy Cartesian coordinates[x,y,z] relative to your position [0,0,0] and return a 2D array of latitudinal (pi/2 to -pi/2) and longitudinal(0 to 2pi)[lat,lon] angles in radians accurate to 2 decimal places. Each sub array tells the rifle the direction it should be facing before it shoots (initial trajectory of each bullet).
// Assumptions

//     Gravity=-9.81m/s2
//     SUVAT equations are accurate
//     r2 = x2 + y2 + z2 (Pythagoras' Theorem)
//     Air resistance = 0
//     The rifle shoots anything between 1 <= radius <= 5000m
//     The rifle will only shoot targets where z >= 0.
//     Initial velocity of the bullet = 700m/s.
//     The rifle will shoot closer enemies first.

// Your rifle can hit most targets using 2 latitudinal trajectories. Make sure your bullet takes the **fastest** path! Be wary of the coordinate x = 0, y = 0, z > 1 which should return a **polar (longitudinal)** angle of **"undefined"**.

// P.S If you notice any mistakes or ways in which I can improve or simplify this Kata, please contact me with your suggestions. Many thanks!

// Suggested links below:
// https://en.wikipedia.org/wiki/Quadratic_equation
// https://en.wikipedia.org/wiki/Spherical_coordinate_system
// https://en.wikipedia.org/wiki/Equations_of_motion

// Example:

// > fire([[1000,200,600],[100,200,400]])// returns [["1.06","1.11"],["0.54", "0.20"]]

// > fire ([[x,y,z],[x,y,z]...])// returns [[lat,lon],[lat,lon]...]

// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
function fire(arr) {
  return arr.map((coordinates) => {
    const [x, y, z] = coordinates;
    const latitude = Math.asin(z / 6371);
    const longitude = Math.atan2(y, x);
    return [latitude.toFixed(2), longitude.toFixed(2)];
  });
}

console.log(fire([[100, 200, 400]]), [['1.06', '1.11']]);
