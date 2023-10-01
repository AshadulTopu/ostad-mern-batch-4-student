// 4. Grade Calculator (JavaScript Switch Case)

function calculateGrade(stdNum){

    switch(true){
        case (stdNum >= 90):
            return 'A';
        case (stdNum >= 80):
            return 'B';
        case (stdNum >= 70):
            return 'C';
        case (stdNum >= 60):
            return 'D';
            default :
            return'F';
    }
    
}

console.log(calculateGrade(91));
console.log(calculateGrade(60));