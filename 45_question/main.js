// define a function to create a car objects with optional option ...
function create_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialized a car objects with manufacture and model 
    var car = {
        manufacture: manufacture,
        model: model
    };
    // add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// calling a function to create a car objects
var my_car = create_car("Toyota", "Carolla", "Color:Black", "Sunroof:True", "Year:2024");
// print the varriable to ensure all the information is stored correctly in the car objects 
console.log(my_car);
