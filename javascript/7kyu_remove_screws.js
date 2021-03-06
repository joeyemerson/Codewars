// #Task:

// John is a worker, His job is to remove the screws from the machine.

// A parameters ```screws``` will be given by a string, like this: ```"---+++"```, ```"-" and "+"``` are two type of screws.

// John have two screwdrivers: slotted screwdriver and cross screwdriver. slotted screwdriver can remove screw "-", cross screwdriver can remove screw "+".

// When John began to work, he stood in the first screw, with a screwdriver in his hand(He is always holding a screwdriver that can screw out the first one), another screwdriver in his tool kit.

// He works from left to right, remove the screws, when the different types of screws appear, he will replace his screwdriver and continue his work.

// Some actions and time consuming:
// ```
// remove one screw :               1 second
// move to adjacent screw position: 1 second
// replace different screwdriver:   5 seconds
// ```
// Our task is to calculate the total time when he removed these screws. return a number.

// Specific time calculation to see the following example:

// #Example:

//     example1:
//     screws="---+++"
//     In order to be more clear, we use ABCDEF to represent them,
//     the number in brackets is the time(seconds)
//     remove A(1) + move to B and remove B(2) +
//     move to C and remove C(2)+ move to D(1) +
//     replace screwdriver(5)+remove D(1)+
//     move to E and remove E(2)+move to F and remove F(2)
//     total times=16 seconds

//     so, sc("---+++")=16

//     example2:
//     screws="-+-+-+"  (ABCDEF)
//     remove A(1)+
//     move to B(1)+replace screwdriver(5)+remove B(1)+
//     move to C(1)+replace screwdriver(5)+remove C(1)+
//     move to D(1)+replace screwdriver(5)+remove D(1)+
//     move to E(1)+replace screwdriver(5)+remove E(1)+
//     move to F(1)+replace screwdriver(5)+remove F(1)
//     total times=36 seconds
//     so, sc("-+-+-+")=36

//     example3:
//     screws="-+-+-----------"
//     total times=1+(1+5+1)+(1+5+1)+(1+5+1)+(1+5+1)
//                 +2+2+2+2+2+2+2+2+2+2=49 socends
//     so, sc("-+-+-----------")=49

//     example4:
//     screws="-+-+-++++++++++"
//     total times=1+(1+5+1)+(1+5+1)+(1+5+1)+(1+5+1)+(1+5+1)
//                 +2+2+2+2+2+2+2+2+2=54 seconds
//     so, sc("-+-+-++++++++++")=54

function sc(screws) {
  if (!screws || !screws.length) return 0;

  const move = 1;
  const remove = 1;
  const swapTool = 5;

  let time = 1;

  for (let i = 1; i < screws.length; i++) {
    time += move + remove + (screws[i] === screws[i - 1] ? 0 : swapTool);
  }

  return time;
}

console.log(sc('---+++'), 16);
console.log(sc('-+-+-+'), 36);
console.log(sc('-+-+-----------'), 49);
console.log(sc('-+-+-++++++++++'), 54);
