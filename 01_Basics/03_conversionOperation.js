let score = "33abc"

console.log(typeof score);
console.log(typeof (score));   // both are similar ways to write 

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)  // NaN => not a number


/*
let score2 = null

console.log(typeof score2);

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)  // 0



let score3 = undefined

console.log(typeof score3); 

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)  // NaN => not a number



let score4 = false

console.log(typeof score4); 

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)  // true => 1  and  false => 0



let score5 = "Yash"

console.log(typeof score5); 

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5)
console.log(valueInNumber5)  // NaN => not a number
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


/*
let isLoggedIn2 = ""

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)


let isLoggedIn3 = "yash"

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3)
*/

// 1 => true; 0 => false
// "" => false
// "yash" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);