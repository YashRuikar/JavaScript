// let myName = "yash   "
// let myClub = "Fc Barcelona   "

// console.log(myName.trueLength);

let myHeros = ["Spiderman", "Ironman"]

let heroPower = {
    Spiderman: "sling",
    Ironman: "Suit",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.yash = function(){
    console.log(`yash is present in all objects`);
}

Array.prototype.heyYash = function(){
    console.log(`Yash says hello`);
}

// heroPower.yash()
// myHeros.yash()
// myHeros.heyYash()
// heroPower.heyYash()


// Inheritance

const User = {
    fullName: "Lionel Messi",
    email: "got@football.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// Ṃodern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "YashRuikar     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"FC Barcelona".trueLength()
"iceTea".trueLength()