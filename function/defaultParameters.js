function interest(principle, rate = 3.5, years = 5){
    
    return principle * rate/100 * years;
 }

 console.log(interest(100000, 4.5, 6));


 //default parameters must be at the end of all parametes.