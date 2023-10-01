// 3) javascript Spread Operator
// Write a JavaScript function named mergeArrays that takes two arrays as arguments and returns a new array that merges both arrays using the spread operator.
// Example:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
function mergeArrays(x,y){
    return arr3 = [...x, ...y]
}
console.log(mergeArrays(arr1, arr2))