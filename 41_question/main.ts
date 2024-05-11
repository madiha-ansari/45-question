// define a function to print each magician name from an arrary
function show_magicians(magicians :string[]){
magicians.forEach(name => console.log(name));
}

// define an arrary containing magicians name
let magician_names = ["Harry poter","Hamza","Usman"];

// calling the function to print each magician name
show_magicians(magician_names);