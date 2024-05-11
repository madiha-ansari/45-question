// define a function to show  magician name 
function show_magicians(magicians:string[]) {
    magicians.forEach(name => console.log(name));
}
// function to make magicians great through .map() it will modify arrary
function make_great(magicians:string[]) {
    return magicians.map( name => `The great ${name}`);
}

// define an arrary to magicians name
var magician_names = ["Harry poter", "Hamza", "Usman"];

// Making a copy of original arrary through .slices function
let copy_magician_names =  magician_names.slice();

// modify the copied arrary to include the "The great" with their names
let copy_great_magicians  = make_great(copy_magician_names);

// show both arrary copied and originals
// originals
console.log("Originals Arrary\n");
show_magicians(magician_names);

// copied
console.log("\nCopied Arrary\n");
show_magicians(copy_great_magicians);
