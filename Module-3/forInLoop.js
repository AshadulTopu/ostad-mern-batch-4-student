// 1) javascript For in loop
// Write a JavaScript function named printObjectProperties that takes an object as an argument and uses the for...in loop to print all the properties and their values in the following format: "property: value". If the object is empty, print "Object is empty".

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
