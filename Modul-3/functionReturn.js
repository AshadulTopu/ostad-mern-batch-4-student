// 2) javascript function returns
// Write a JavaScript function named findMaxNumber that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.
// Example:
// const numbers1 = [10, 20, 5, 30, 25];
// console.log(findMaxNumber(numbers1)); // Output: 30
// const numbers2 = [5, 15, 7];
// console.log(findMaxNumber(numbers2)); // Output: 15
// const emptyArray = [];
// console.log(findMaxNumber(emptyArray)); // Output: null

const numbers1 = [10, 20, 5, 30, 25]
const numbers2 = [5, 15, 7]
const emptyArray = []
function findMaxNumber(data){
    if(data.length === 0){
        return null 
    }else{
       return Math.max(...data);
    }
}
console.log(findMaxNumber(numbers1));
console.log(findMaxNumber(numbers2));
console.log(findMaxNumber(emptyArray));

