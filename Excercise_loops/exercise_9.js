const marks = [95, 85, 100];
console.log(calculateGrader(marks));

function calculateGrader(mark){
    let sum = 0;
    for(let i of mark)
        sum += i;

    let average = sum/mark.length; 
    if(average<60) return 'F';
    if(average <70) return 'D';
    if(average< 80) return 'C';
    if(average <90) return 'B';
    return 'A';
}