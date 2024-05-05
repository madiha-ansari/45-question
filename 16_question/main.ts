
// Creating a guest list arrary :
let guestList = ["hamza","usman","ayesha","areeba"];

// making varriable for those guest who cannt come :
let dontCome = guestList[0];

// prnit the name of guest who come
console.log(dontCome,"Nahi asakta han");

// add and remove valuefrom guest list arrary
guestList.splice(0,1,"Amir");

// message print for bigger table
console.log("Good new ! We have found a bigger table for a dinner.");

// adding a new value at starting value of arrary
guestList.unshift("Ali");

// adding a new value at ending value of arrary
guestList.push("Zain");

// get  a guest at middle index of arrary
let middleIndex :number = Math.floor(guestList.length/2);

// adding a new  guest at middle index of arrary
guestList.splice(middleIndex,0,"Osama");

// print message of update list
console.log("update list of our guests");

// sending a invitation message  to our guest one by one with their name:
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me`));
