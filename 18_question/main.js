var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a arraryof countries and print its original order 
var countriesToVisit = ["china", "denmark", "erazil", "argentina"];
console.log("original order", countriesToVisit);
// print the arrary in alphabetical order without modifying the actual arrary list
console.log("alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
// show the arrary is still in its original order
console.log("original order", countriesToVisit);
// print the array is reversed order without modifying the actual arrary list
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse());
// show the arrary is still in its original order
console.log("original order", countriesToVisit);
// we have change the original arrary order now
console.log("original arrary reversed:", countriesToVisit.reverse());
// print the arrary to show that it's back to its original order
console.log("Back to original order:", countriesToVisit.reverse());
// print the arrary to show that it's order has been changed  in alphabetical order now
console.log("Sorted in alphabetical order:", countriesToVisit.reverse());
// we have change again the original arrary order now in reversed order again
console.log("original arrary reversed again:", countriesToVisit.reverse());
