// describe a function
function describe_city (city:string, country:string = "Pakistan"){
    console.log(` ${city} is a ${country}`);
}

// calling a function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin","Germany");