// Exercise 2 - Array Double
//
// Write a program that takes an array as input which contains an unknown set of numbers,
// and output an array which doubles the values of each item in that array.
// Test your solution by trying a handful of different arrays.


// base case: array.length === 0
// recursive; splice 1st index of array splice.arr[0]. Spread operator into new array
// return [index, ...]


function double(array) {
  if(!array.length) {
    return [];
  }
  let doubledNum = array[0] * 2;
    return [doubledNum, ...double(array.splice(1))]
}
double([100,40,32,43,5,5,6,7,8])


function double2(array) {
  return array.map(x => x * 2));
}

double2([100,40,32,45,34,43]);
