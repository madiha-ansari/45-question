// creating a A rrary
let userName = ["madiha", "anas", "umaima", "nawaz"];

userName = []

if (userName.length === 0) {
  console.log("Your Arrary in empty we need to find some users!");
} else {
  // using ForEach Loop on Arrary
  userName.forEach((oneUser) => {
    if (oneUser === "Admin") {
      console.log(`Hellow ${oneUser},would you like to see a status report?`);
    } else {
      console.log(`Hellow ${oneUser},thank you fpr logging again`);
    }
  });
}
