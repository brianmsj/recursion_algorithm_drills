// Write a recursive program that prints the fibonacci sequence of a given number.
// The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers.
// For example the 7th fibonacci number in a fibonaci sequence is 13.
// The sequence looks as follows: 1 1 2 3 5 8 13.

function fib(n) {
if (n ===0) {
return 0;
}

if (n===1) {
return 1;
}
let fibnac  = fib(n-2) + fib(n-1)
return fibnac;
}

for (let i = 0; i < 12; i++) {
  console.log(fib(i));
}
