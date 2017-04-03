// Exercise 1 - Counting Sheep
//
// Write a recursive program that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have.
// The program should display the number along with the msg "Another sheep jumps over the fence" until no more sheep left.


function countingSheep(num) {
  if (num === 0 ) {
    return;
  }
  countingSheep(num - 1);
  console.log(num,'Another jumped over the fence')

}

// if sheep < 0 return
//recursive
