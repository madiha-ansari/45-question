// creaying a varriables
let age = 22;
//  let age = 1;
// let age = 4;

// creating a program for determining the stage of life using if else chain :
if(age < 2){
    console.log("you are a baby.");
}else if(age >= 2 && age > 4){
    console.log("you are a toddler.");
}
else if(age >= 4 && age < 13){
    console.log("you are a kid.");
}
else if(age >= 13 && age < 20){
    console.log("you are a teenager.");
}
else if(age >= 20 && age < 65){
    console.log("you are an adults.");
} else if(age >= 65){
    console.log("you are elder.");
}