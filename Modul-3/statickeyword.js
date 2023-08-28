// 6) javascript es6 static keyword
// Create a JavaScript class named MathUtility with an ES6 static method called multiply. The multiply method should take two parameters and return their product.
// Example:
// console.log(MathUtility.multiply(5, 3)); // Output: 15
// console.log(MathUtility.multiply(2, 8)); // Output: 16

class MathUtility {
    static multiply(x,y){
        return x*y
    }
}

console.log(MathUtility.multiply(5, 3))
console.log(MathUtility.multiply(2, 8))
