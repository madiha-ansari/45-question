// define a function with a rest parameters that accepts items arguments representing our sandwiches
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwiches with the following items :\n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\n Now Enjoy your sandwiches");
}
// calling the function 3 items with 3 different numbers of aguments
makeSandwich("Chicken", "Cheez", "Mayo", "Egg");
makeSandwich("Breed", "Butter");
makeSandwich("Breed", "Chicken", "Cheez", "Mayo", "Butter");
