// making a function
function make_shurt (size: string = "large",printMessage:string = "I loved typescript"){
    console.log(`Creating a ${size} size shurt with ${printMessage} print on shurt `);
}


// calling a function with by default value
make_shurt();


// calling a function now with medium size and default message
make_shurt("Medium");

// calling a function now with medium size and also different print message 
make_shurt("Small","I loved Java Script");