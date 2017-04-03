// Exercise 3 - Reverse String
//
// Write a program that reverses a string. Take a string as input, reverse the string, and return the new string.

//base case: str.length === 0 return ''
//recursive case: take the last letter in the front

function reverseString(str) {
  if(str === "") {
    return "";
  }
  const stringSlice = str.slice(-1));

  return stringSlice + reverstring(str.slice(0, -1))

}
  reverseString('hello');
