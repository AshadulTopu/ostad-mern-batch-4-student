//Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(x){
    console.log(x[0]);
}

getFirstValue([1, 2, 3])
getFirstValue([80, 5, 100])




//Create a function that accepts an array and returns the last item in the array.
function getLastItem(x){
    let lastItem = x[x.length -1]
    console.log(lastItem);
}

getLastItem([1, 2, 3])
getLastItem(["cat", "dog", "duck"])




//Create a function that returns true if a string is empty and false otherwise.
function isEmpty(x){
    if( x == ''){
        console.log(true);
    }else{
        console.log(false);
    }
}

isEmpty("")
isEmpty(" ")
isEmpty("a")




// 4 There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x,y){
    console.log(x % y);
}

remainder(10, 3)
remainder(17, 5)
remainder(5, 5) 




// 5 Create a function that finds the index of a given item.
function search( x, y){
    let index = x.indexOf(y)
    console.log(index);
}

search([1, 5, 3], 5)
search([9, 8, 3], 3)
search([1, 2, 3], 4)




// 6 Create a function that takes the age in years and returns the age in days.
function calcAge(x){
    console.log(x * 365);
}

calcAge(65)
calcAge(0)
calcAge(20)



//7 Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallestNum(x){
    let smallestNum = Math.min(...x)
    console.log(smallestNum);
}

findSmallestNum([34, 15, 88, 2])
findSmallestNum([34, -345, -1, 100])




// 8 Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
function returnNegative(x){
    console.log( -Math.abs(x));
}
returnNegative(4)
returnNegative(15)




