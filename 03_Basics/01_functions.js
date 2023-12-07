function sayMyName() {
  console.log("Y");
  console.log("A");
  console.log("S");
  console.log("H");
}

// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(10, 5)
// console.log("Result: ", result);



function loginUserMessage(username = "Sam"){
    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Yash"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 500, 800, 2000));



// Object passed in function

const user = {
    username: "Yash",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)


handleObject({
    username: "Sam",
    price: 399
})


// Array passed in function

const myNewArray = [200, 400, 1000, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 1000, 600]));

