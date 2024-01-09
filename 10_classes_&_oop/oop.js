// Object literal

const user = {
    username: "Yash",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from the database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



// Constructor function

function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Yash", 4, true)
const UserTwo = new User("Lionel Messi", 10, true)
console.log(userOne.constructor);
// console.log(UserTwo);