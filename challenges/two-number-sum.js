
function twoNumberSum(array, targetSum) {
  if (array.length === 0) {
    return 'empty array given...';
  }

  let targetSumResult = []; 

  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length -1; j++) {
      if (array[i] + array[j] == 10) {
        targetSumResult.push(array[i]);    
        targetSumResult.push(array[j]);    
        return targetSumResult;
      }
    }
  }

}

let input = [3, 5, -4, 8, 11, 1, -1, 6]; 

let target = 10; 

let result = twoNumberSum(input, target); 

console.log(result);
