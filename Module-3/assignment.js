// 1) javascript For in loop
let parson1 = {
    firstName: 'jonh',
    lastName: 'Deo',
    age: 40,
}
let parson2 = {}

function printObjectProperties(x){
    if( Object.keys(x).length === 0){
        console.log('Object is empty');
    }else{
        for (let y in x) {
            console.log(`${y}: ${x[y]}`);
        }
    }
}
printObjectProperties(parson1)
printObjectProperties(parson2)


// 2) javascript function returns
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


// 3) javascript Spread Operator
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
function mergeArrays(x,y){
    return arr3 = [...x, ...y]
}
console.log(mergeArrays(arr1, arr2))


//4) javascript arrow function
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


//6) javascript es6 static keyword
class MathUtility {
    static multiply(x,y){
        return x*y
    }
}

console.log(MathUtility.multiply(5, 3))
console.log(MathUtility.multiply(2, 8))


// 7) javascript es6 class inheritance
class Animal{
    constructor(name, sound){
        this.name = name
        this.sound = sound
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Dog extends Animal{
    fetch(){
        console.log("Fetching the ball!")
    }
}

const animal = new Animal("Lion", "Roar")
animal.makeSound()
const dog = new Dog("Buddy", "Woof")
dog.makeSound()
dog.fetch()



// 8) javascript es6 super keyword
class Parson{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

class Student extends Parson{
    constructor(name, age, major){
        super(name, age)
        this.major = major        
    }
    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }

}

const student = new Student('Alice', 20, 'Computer Science')
student.introduce();
























