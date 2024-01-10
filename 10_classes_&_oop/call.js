function SetUsername(username){
    // Complex DB calls
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const messi = new createUser("Lionel Messi", "got@football.com", "10")
console.log(messi);