// Given the starting code of:

// x = 1
// y = 2
// Write a block of code that will print out the largest value.

// Usnig the given values as an example, your code should print out 2.

// To verify your code is working properly, try and change the values of x and y.

// As an additional challenge, print out The values are identical. if x and y have the same value.

console.log("Hello World");

const x = 10;
const y = 25;

var result;

if(x === y) {
  result = ("Match");
} else if(x != y) {
  result = Math.max(x,y);
}
;

console.log(result);

// if(x > y) {
//   console.log(x);
// } else if(x < y) {
//   console.log(y);
// } else if(x === y) {
//   console.log("They're equal");
// }
