// define a function to print each magician name from an arrary
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an arrary containing magicians name
var magician_names = ["Harry poter", "Hamza", "Usman"];
// calling the function to print each magician name
show_magicians(magician_names);
