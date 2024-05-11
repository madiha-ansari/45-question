// define a function with a rest parameters that accepts items arguments representing our sandwiches
function makeSandwich (...items:string[]){
console.log("Making a sandwiches with the following items :\n");

items.forEach(singleItem => console.log(singleItem));

console.log("\n Now Enjoy your sandwiches");

}

// calling the function 3 items with 3 different numbers of aguments
makeSandwich("Chicken","Cheez","Mayo","Egg");

makeSandwich("Breed","Butter");

makeSandwich("Breed","Chicken","Cheez","Mayo","Butter");