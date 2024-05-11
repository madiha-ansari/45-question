// creating a A rrary
var userName = ["madiha", "anas", "umaima", "nawaz"];
// using ForEach Loop on Arrary
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hellow ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hellow ".concat(oneUser, ",thank you fpr logging again"));
    }
});
