// Singleton
// Object.create     // Ex. of singleton


// object literals

const mySym = Symbol("mykey")

const jsUser = {
    name: "Yash",
    "full name": "Yash Ruikar",
    [mySym]: "mykey",
    age: 22,
    location: "Pune", 
    email: "abc@google.com", 
    isLoggedIn: false, 
    lastLoginDays: ["Monday", "Friday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "yash@gmail.com"
// console.log(jsUser.email)

// Object.freeze(jsUser)
jsUser.email = "culersfc11@gmail.com"
// console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello Js, user");
}

jsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());