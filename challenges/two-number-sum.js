
function twoNumberSum(array, targetSum) {
  if (array.length === 0) {
    return [];
  }

  let targetSumResult = []; 

  // On^2
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j <= array.length; j++) {
      console.log('test');
      if (array[i] + array[j] === targetSum) {
        targetSumResult.push(array[i]);    
        targetSumResult.push(array[j]);    
        return targetSumResult;
      }
    }
  }
  return []; 

}

// let input = [3, 5, -4, 8, 11, 1, -1, 6]; 
// let input = [4, 6]; 
let input = [4, 6, 1]; 

// let target = 10; 
let target = 5; 

let result = twoNumberSum(input, target); 

console.log(result);
