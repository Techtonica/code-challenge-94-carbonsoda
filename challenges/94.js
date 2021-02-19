// Given an array of integers, and a target,
// return the pair of indices which contain values that sum to the target.
// Assume only one possible pair in given array.
// Return [-1, -1] if such a pair does not exist.
//
// EX1:
//
// find_indicies_to_sum([3, 11, 5, 8, 9, 1], 10)
//
// Output: [4, 5] ... Because 9 and 1 make 10.
//
// EX2:
//
// find_indicies_to_sum([2, 3, 5, 1, 10, 8], 50)
//
// Output: [-1, -1]
//
// _Bonus: get it work if there are multiple valid pairs and return all the combinations as an array of arrays. (You'll have to write your own tests for this)_

function find_indicies_to_sum(input_array, target) {
  if (input_array.length < 2) return [-1, -1];


  // Tried to allow for multiple pairs
  // But couldn't figure out how to filter duplicates
  // let pairs = [];

  for (let i = 0; i < input_array.length; i++) {
    let num1 = input_array[i];

    // the ideal matching
    let num2 = target - num1;

    for (let j = 0; j < input_array.length; j++) {
      if (input_array[j] == num2 && i != j) {
        // from multiple pair attempt
        // pairs.push([i, j]); 
        return [i, j];
      }
    }
  }

  // return pairs.length > 0 ? pairs: [-1, -1];
  return [-1, -1];
}


module.exports = find_indicies_to_sum;
