showNumbers(20);
function showNumbers(limit){
    for (i=0; i<=limit; i++){
        if(i % 2 == 0){
            console.log(i, "EVEN");
        }
        else {
            console.log(i, "ODD");
        }
    }
}