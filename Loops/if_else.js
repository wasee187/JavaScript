//Hour
//if hour is between 6am and 12pm:Good Morning!
//If it is between 12 pm an 6pm: Good Afternon!
//otherwise : Good Evening!

let hour = 20;
if(hour >=6 && hour<12)
    console.log("Good Morning!");

else if(hour >=12 && hour < 18)
    console.log("Good Afternoon!");

else
    console.log("Good Evening!");
