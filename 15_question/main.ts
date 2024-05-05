let guestList = ["hamza","ali","huzaifa","haziq"];

let dontCome = guestList[0];

console.log(dontCome,"Nai Ah Sakta AP");

guestList.splice(0,1,"Amirr");

guestList.forEach(guest =>console.log(`Salam ${guest}, would you like to dinner with me?`));