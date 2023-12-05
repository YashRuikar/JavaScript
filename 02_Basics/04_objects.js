// const facebookUser = new Object()    // Singleton ex.

const facebookUser = {}

facebookUser.id = "123abc"
facebookUser.name = "Sam"
facebookUser.isLoggedIn = false

// console.log(facebookUser);


const AdhaarCardUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yash",
            lastname: "Ruikar"
        }
    }
}

// console.log(AdhaarCardUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign(obj1, obj2, obj3)
// const obj4 = Object.assign({}, obj1, obj2, obj3)


const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);


const user = [
    {
        id: 1,
        email: "yash@gmail.com"
    },
    {
        id: 2,
        email: "rugved@gmail.com"
    },
    {
        id: 1,
        email: "shreya@gmail.com"
    }
]

console.log(user[2].email)

console.log(facebookUser);

console.log((Object.keys(facebookUser)));
console.log((Object.values(facebookUser)));
console.log((Object.entries(facebookUser)));

console.log(facebookUser.hasOwnProperty("isLoggedIn"));