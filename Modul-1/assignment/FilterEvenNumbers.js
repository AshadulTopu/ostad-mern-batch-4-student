//2.Filter Even Numbers
let arr =  [12, 34, 45, 23, 6, 78, 54, 90]

let evenArr  = arr.filter( function(x){
   return x % 2 == 0
} )
console.log(evenArr);
