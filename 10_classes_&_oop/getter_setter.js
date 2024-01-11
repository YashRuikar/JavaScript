class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}yash`
    }
    set password(value){
        this._password = value
    }
}

const yash = new User("yash@google.com", "abc")
console.log(yash.email);
console.log(yash.password);