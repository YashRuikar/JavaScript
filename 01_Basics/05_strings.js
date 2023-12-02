const name = "Yash"
const repoCount = 19

// console.log(name + repoCount + " value");   // Not a good way to write a code

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way to write string

const gameName = new String('yash-Ruikar')

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);


const newStringOne = "      FC Barcelona      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yashruikar.com"
console.log(url.replace('yashruikar', 'fcbarcelona'));

console.log(url.includes('yash'));

console.log(gameName.split('-'));