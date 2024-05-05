
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

// inform  that only two guest invited for dinner
console.log("unfortunately ,the new dinner dinner table wont arrive on time , so I can only invite two guest to dinner with me");

// using wile-loop to remove guest from the arrary until only two names remains
while(guestList.length > 2){
let removeGuest = guestList.pop();
console.log(`Sorry,${removeGuest}I cannt invite you to dinner`);
}

// sending a invitation to the last two guest on the last 
console.log("Invitation to the last 2 Guest");

guestList.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you are still invite to dinner`));

// removing last two guest  from the list
guestList.pop();
guestList.pop();

console.log("Empty list:",guestList);












