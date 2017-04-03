// An anagram is any word or phrase that exactly reproduces the letters in another order.
// Write a program that creates an anagram (listing all the rearrangements of a word) of a given word.
// For example, if the user types east, the program should list all 24 permutations,
// including eats, etas, teas, and non-words like tsae.
//
// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words.
// For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast,
// ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa.
// Continue this way until you find all the anagrams for east. There should be 24 of them.


// take the word, slice off each letter, iterate through possible letters and add it to all combinations.

// base case: if (str.length === 0) return [];
// recursive case: take the str.charAt(0) then add it to every position in the string

// create a function that takes a string as an arg
function allAnagrams(string) {

  // create a results array
  let results = [];


  // create helper to build anagrams. Arguments: 1) in-progress anagrams, 2) leftover letters
  function makeAnagram(inProgress, leftovers) {
    // if in-progress's length === string's length
    if (inProgress.length === string.length) {
      // push in-progress into results array
      results.push(inProgress);
    }



    // loop through leftover letters
    for (let i = 0; i < leftovers.length; i++) {
      // recursively call helper. Args: 1) letter from loop with in-progress prepended, 2) leftover letters minus the letter from loop.
      let inProgressWithAddedLetter = inProgress + leftovers[i];

      let remainingLettersAfterAdd = leftovers.slice(0,i) + leftovers.slice(i+1);

      makeAnagram(inProgressWithAddedLetter, remainingLettersAfterAdd);
    }
  };

  // call helper with empty string and original string
  makeAnagram('', string);

  // return results
  return results;
};

allAnagrams('hello')
