// making a function
function make_shurt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I loved typescript"; }
    console.log("Creating a ".concat(size, " size shurt with ").concat(printMessage, " print on shurt "));
}
// calling a function with by default value
make_shurt();
// calling a function now with medium size and default message
make_shurt("Medium");
// calling a function now with medium size and also different print message 
make_shurt("Small", "I loved Java Script");
