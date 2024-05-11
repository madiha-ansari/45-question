// define varriables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruit = ["apple","banana","orange"];


// test for equality  inequality with strings
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple" );

// tests using lowercase function
console.log("Is APPLE is equal to apple after conventing to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");

console.log("Is APPLE is not equal to apple after conventing to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");

// Numerical tests 
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

// not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// less than
console.log("\nIs twenty is  less than ten?");
console.log(twenty < 10);

// greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(ten <= 10);

// tests using "and" & "or" operator
console.log("\nIs twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);


console.log("\nIs twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// using || (OR)
console.log("\n20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);

//  Test whether an item is  include in a array
console.log("\nIs orang is  include in my fruit arrary");
console.log(fruit.includes("orange"));

// NOT include 
console.log("\nIs orang is  include in my fruit arrary");
console.log(fruit.includes("orange"));