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
console.log(loginUserMessage());