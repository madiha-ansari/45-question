// arrary of current users
var current_users = ["usman", "ali", "areeba", "zain", "osama"];
// arrary of new users 
var new_users = ["hamza", "ayesha", "ali", "mahad", "areeba"];
// loops throught new_users  to check for users_names availlity
new_users.forEach(function (new_one_user) {
    // making a conditions for usersnames already exits and save in our_conditions varriables
    var our_conditions = current_users.some(function (current_users) { return current_users.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    // print different message using IF Else conditions  
    if (our_conditions) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This usersnames ".concat(new_one_user, " is availble"));
    }
});
