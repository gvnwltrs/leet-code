
var runningSum = function(nums) {
    let sum = 0;
    let result = [];

    nums.forEach((num) => {
       sum += num;
       result.push(sum); 
    }); 

    return result;  
};

let input = [1, 2, 3, 4, 5];

let result = runningSum(input); 
console.log(result); 
