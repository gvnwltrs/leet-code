
function twoNumberSum(array, targetSum) {
  if (array.length === 0) {
    return [];
  }

  for (const num of array) {
    let qualifier = targetSum - num; 
    if(array.indexOf(qualifier) >= 0 && qualifier != num) {
      return [num, qualifier];
    }
  }

  return []; 
}

let a = [3, 5, -4, 8, 11, 1, -1, 6]; 
let b = [4, 6]; 
let c = [4, 6, 1]; 
let input = c; 

// let target = 10; 
let target = 10; 

let result = twoNumberSum(input, target); 

console.log(result);
