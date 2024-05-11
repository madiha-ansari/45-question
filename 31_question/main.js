// creating a A rrary
var userName = ["madiha", "anas", "umaima", "nawaz"];
userName = [];
if (userName.length === 0) {
    console.log("Your Arrary in empty we need to find some users!");
}
else {
    // using ForEach Loop on Arrary
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hellow ".concat(oneUser, ",would you like to see a status report?"));
        }
        else {
            console.log("Hellow ".concat(oneUser, ",thank you fpr logging again"));
        }
    });
}
