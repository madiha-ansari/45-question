// define a function to create a car objects with optional option ...
function create_car(manufacture,model, ...options){
// initialized a car objects with manufacture and model 
let car = {
manufacture:manufacture,
model:model
};

// add additional options to the car object
options.forEach(option => {
let [key,value]= option.split(":")
car[key.trim()] = value.trim();

});

return car;

}

// calling a function to create a car objects
let my_car = create_car("Toyota","Carolla","Color:Black","Sunroof:True","Year:2024");

// print the varriable to ensure all the information is stored correctly in the car objects 
console.log(my_car);
