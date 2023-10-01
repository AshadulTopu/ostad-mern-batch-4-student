//7 Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallestNum(x){
    let smallestNum = Math.min(...x)
    console.log(smallestNum);
}

findSmallestNum([34, 15, 88, 2])
findSmallestNum([34, -345, -1, 100])