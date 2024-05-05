var guestList = ["hamza", "ali", "huzaifa", "haziq"];
var dontCome = guestList[0];
console.log(dontCome, "Nai Ah Sakta AP");
guestList.splice(0, 1, "Amirr");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
