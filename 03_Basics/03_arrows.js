const user = {
    username: "Yash", 
    price: 599,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }  
}

// user.welcomeMessage()
// user.username = "Sam" 
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     username: "yash"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "yash"
//     console.log(this.username);
// }


const chai = () => {
    let username = "yash"
    console.log(this);
}

// chai()


// Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//  Implicit Return

// const addTwo = (num1, num2) => num1 + 

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "yash"})

console.log(addTwo(2, 5));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()