//     Input : an array of integers.
//     Output : this array, but sorted in such a way that there are two wings:

//         the left wing with numbers decreasing,
//         the right wing with numbers increasing.

//         the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.

//         each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.

// The function is make_valley or makeValley or make-valley.

// a = [79, 35, 54, 19, 35, 25]
// make_valley(a) --> [79, 35, 25, *19*, 35, 54]
// The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
// 79..................54
//     35..........35
//         25.
//           ..19

// a = [67, 93, 100, -16, 65, 97, 92]
// make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
// The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
// 100.........................97
//     93..........
//                .........92
//         67......
//                .....65
//             -16

// a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
// make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
// The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].

// a = [14,14,14,14,7,14]
// make_valley(a) => [14, 14, 14, *7*, 14, 14]

// a = [14,14,14,14,14]
// make_valley(a) => [14, 14, *14*, 14, 14]

// A counter-example:

// a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
// A solution could be [17, 17, 15, 14, 8, 1, 4, 4, 5, 7, 7]
// but the right wing [4, 4, 5, 7, 7] is much flatter than the left one
// [17, 17, 15, 14, 8].

// Summing the differences between left and right wing:
// (17-7)+(17-7)+(15-5)+(14-4)+(8-4) = 44

// Consider the following solution:
// [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
// Summing the differences between left and right wing:
// (17-17)+(15-14)+(8-7)+(7-5)+(4-4) = 4
// The right wing is nearly as steep as the right one.

const makeValley = arr => {
  const nums = arr.slice();
  const len = nums.length;
  nums.sort((a, b) => b - a);

  return nums.map((_, i, a) => (i < len / 2 ? a[i * 2] : a[len * 2 - i * 2 - 1]));
};

console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]), [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
console.log(makeValley([20, 7, 6, 2]), [20, 6, 2, 7]);
console.log(makeValley([14, 10, 8]), [14, 8, 10]);
console.log(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]), [20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]);
console.log(makeValley([20, 16, 14, 10, 1]), [20, 14, 1, 10, 16]);
console.log(makeValley([19, 19, 18, 14, 12, 11, 9, 7, 4]), [19, 18, 12, 9, 4, 7, 11, 14, 19]);
// prettier-ignore
console.log(makeValley([20, 18, 16, 15, 14, 14, 13, 13, 10, 9, 4, 4, 4, 1]), [20,16,14,13,10,4,4,1,4,9,13,14,15,18]);
console.log(makeValley([20, 20, 16, 14, 12, 12, 11, 10, 3, 2]), [20, 16, 12, 11, 3, 2, 10, 12, 14, 20]);
console.log(makeValley([19, 17, 16, 15, 13, 8, 5, 5, 4, 4, 4]), [19, 16, 13, 5, 4, 4, 4, 5, 8, 15, 17]);
console.log(makeValley([19, 8, 6]), [19, 6, 8]);
