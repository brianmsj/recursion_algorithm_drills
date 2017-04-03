// Write a recursive program that finds the factorial of a given number.
// The factorial of a number can be found by multiplying that number by each number between itself and one.
// The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

//base case: terminate the loop once it hits 1
//recursive case: multiple all the lower numbers by each other. 5 * 4 * 3 * 2 * 1



function fact(n) {

if (n===1) {
  return 1;
}
else {
  return n * fact(n-1);
}
}

fact(9);
