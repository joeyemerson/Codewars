// Shorten Me: Mad Mathematician's Algorithm III (Multiplication)
// Task

// You have to write a madMul(a,b) function returning a value of a * b without * in your code.
// Coding Limitation:

//     Less than 30 characters

// Input:

//     a and b : integer ( 0-10000 )

// Note: Avoid using Math.imul()

// prettier-ignore
madMul=(a,b)=>~~(a/(1/b)+.99)

// Slick...
// madMul=f=(a,b)=>b&&a+f(a,--b)

console.log(madMul(0, 0), 0);
console.log(madMul(1, 2), 2);
console.log(madMul(4, 5), 20);
console.log(madMul(7829, 1886), 14765494);
console.log(madMul(2024, 7093), 14356232);
console.log(madMul(7511, 6779), 50917069);
