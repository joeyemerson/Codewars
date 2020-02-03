// Description

// Given a 2D array that only contains 0 and 1, please find out how many 1 are surrounded by 0 or 0 surrounded by 1. "Surrounded" means that its four directions(up down left right) all are diffrent numbers.

// Example:

// [
// [0,1,1,0,1,1,0,1,0],
// [1,0,1,0,1,1,0,1,0],
// [0,1,1,0,0,1,0,1,0],
// [0,0,1,0,1,0,1,1,0],
// [0,0,1,0,0,1,0,1,0],
// [0,0,1,0,1,0,0,1,0],
// [0,0,1,0,0,1,0,1,0]
// ]

// There are three 1 surrounded by 0(the x in the array):
// [
// [0,1,1,0,1,1,0,1,0],
// [1,0,1,0,1,1,0,1,0],
// [0,1,1,0,0,1,0,1,0],
// [0,0,1,0,x,0,1,1,0],
// [0,0,1,0,0,x,0,1,0],
// [0,0,1,0,x,0,0,1,0],
// [0,0,1,0,0,1,0,1,0]
// ]

// There are two 0 surrounded by 1(the x in the array):
// [
// [0,1,1,0,1,1,0,1,0],
// [1,x,1,0,1,1,0,1,0],
// [0,1,1,0,0,1,0,1,0],
// [0,0,1,0,1,x,1,1,0],
// [0,0,1,0,0,1,0,1,0],
// [0,0,1,0,1,0,0,1,0],
// [0,0,1,0,0,1,0,1,0]
// ]

// So we need return a number 5 (three 1 + two 0)

// Complete function find01 that accepts a argument arr, return a number that is the count of 1 surrounded by 0 or 0 surrounded by 1.

const find01 = arr => {
  surroundedNums = 0;

  for(let i = 1; i < arr.length - 1; i++) {
    for(let j = 1; j < arr[i].length - 1; j++) {
      switch(arr[i][j]) {
        case arr[i-1][j]:
        case arr[i][j+1]:
        case arr[i+1][j]:
        case arr[i][j-1]:
          break
        default:
          surroundedNums += 1;
      }
    }
  }

  return surroundedNums
}


let arr= [
[0,1,1,0,1,1,0,1,0],
[1,0,1,0,1,1,0,1,0],
[0,1,1,0,0,1,0,1,0],
[0,0,1,0,1,0,1,1,0],
[0,0,1,0,0,1,0,1,0],
[0,0,1,0,1,0,0,1,0],
[0,0,1,0,0,1,0,1,0]]
console.log(find01(arr), 5)

arr = [
[1,1,1,0,1,1,0],
[0,1,1,0,0,1,0],
[1,1,1,0,1,1,0],
[0,1,1,0,0,1,0],
[1,0,0,1,0,1,1],
[1,0,1,1,0,0,0]]
console.log(find01(arr), 0)

arr = [
[1,0,1,0,1,0,1],
[0,1,0,1,0,1,0],
[1,0,1,0,1,0,1],
[0,1,0,1,0,1,0],
[1,0,1,0,1,0,1],
[0,1,0,1,0,1,0]]
console.log(find01(arr), 20)