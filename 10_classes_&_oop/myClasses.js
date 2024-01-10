class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const football = new User("Pedri", "pedri08@gmail.com", "123")

console.log(football.encryptPassword());
console.log(football.changeUsername());


// Behind the scene

function player(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const fcb = new User("Gavi", "gavi06@gmail.com", "789")

console.log(fcb.encryptPassword());
console.log(fcb.changeUsername());