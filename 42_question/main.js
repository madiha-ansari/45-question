// define a function to show  magician name 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify arrary
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// define an arrary to magicians name
var magician_names = ["Harry poter", "Hamza", "Usman"];
// call make_great function to modify  magician name 
var great_magicians = make_great(magician_names);
// call show_magicians that show modified lists of magicians
show_magicians(great_magicians);
