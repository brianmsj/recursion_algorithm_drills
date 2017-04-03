// Calculates the nth triangular number.
// A triangular number counts the objects that can form an equilateral triangle.
// The nth triangular number is the number of dots composing a triangle with n dots on a side,
// and is equal to the sum of the n natural numbers from 1 to n.
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45


// input is going to be the number that returns a sequence for the triangular number..//ie... 1,3,6,10,15 ==> input 5 equals 15
// base case: if input === 0 return 0;
// base case2: if input === 1 return 1;
// recursive: take the  (input - 1);

// the input is the incremtation between each Sequence... ie input = 2 --> 1,3
function triangularNumber(n){
    if(n === 0){
        return ;
    }

       let tn = n + triangularNumber(n-1)
       console.log(tn);
       return tn;

}

triangularNumber(5);
