// making a arraryof countries and print its original order 
let countriesToVisit :string[] = ["china","denmark","erazil","argentina"];
console.log("original order",countriesToVisit);

// print the arrary in alphabetical order without modifying the actual arrary list
console.log("alphabetical order:",[...countriesToVisit].sort());

// show the arrary is still in its original order
console.log("original order",countriesToVisit);

// print the array is reversed order without modifying the actual arrary list
console.log("reverse order:",[...countriesToVisit].reverse());

// show the arrary is still in its original order
console.log("original order",countriesToVisit);

// we have change the original arrary order now
console.log("original arrary reversed:",countriesToVisit.reverse());

// print the arrary to show that it's back to its original order
console.log("Back to original order:",countriesToVisit.reverse());

// print the arrary to show that it's order has been changed  in alphabetical order now
console.log("Sorted in alphabetical order:",countriesToVisit.reverse());

// we have change again the original arrary order now in reversed order again
console.log("original arrary reversed again:",countriesToVisit.reverse());








