// var c = 300
let a = 200

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "yash"

    function two(){
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website); // Error

    // two()
}

// one()



if (true) {
    const username = "Lionel Messi"

    if (username === "Lionel Messi") {
        const worldCup = " 2022 World Cup Winner"
        // console.log(username + worldCup);
    }

    // console.log(worldCup);  // Error
}

// console.log(username);  // Error




console.log(addOne(3))

function addOne(num){
    return num + 1
}


// addTwo(10) // Error

const addTwo = function(num){
    return num + 2
}