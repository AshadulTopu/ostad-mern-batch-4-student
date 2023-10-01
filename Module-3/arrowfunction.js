// 4) javascript arrow function
// Write a JavaScript arrow function named calculateSquare that takes a number as an argument and returns the square of that number.
// Example:
// console.log(calculateSquare(5)); // Output: 25
// console.log(calculateSquare(8)); // Output: 64

const calculateSquare = (x)=>(x*x)
console.log(calculateSquare(5))
console.log(calculateSquare(8))

//5) javascript es6 map
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = (x)=>{
    let doubleNumber = x.map((y) =>(y*2) )
    return doubleNumber
}
console.log(doubleNumbers(numbers))