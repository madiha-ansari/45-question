// define a function to show  magician name 
function show_magicians(magicians :string[]){
magicians.forEach(name => console.log(name));
}
    
// function to make magicians great through .map() it will modify arrary
function make_great(magicians:string[]){
   return magicians.map(name => `The great ${name}`);
}

 // define an arrary to magicians name
let magician_names = ["Harry poter","Hamza","Usman"];

// call make_great function to modify  magician name 
let great_magicians =  make_great(magician_names);

// call show_magicians that show modified lists of magicians
show_magicians(great_magicians);

