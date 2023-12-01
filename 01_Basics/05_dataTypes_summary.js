// ** Primitive

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 12345678902154681315464n



// ** Reference (Non Primitive)

// Array, Objects, Functions

// Array:
const heros = ["Ironman", "Batman", "Daredevil"]
// console.log(typeof heros);

// Objects:
let myObj = {
    name: "Yash",
    age: 22
}
// console.log(typeof myObj);

// Function:
const myFunction = function(){
    console.log("I'm Batman");
}

console.log(myFunction());
console.log(typeof myFunction);