// Dates

let myDate = new Date()

// console.log(myDate);                    // 2023-12-02T13:25:48.895Z
// console.log(myDate.toString());         // Sat Dec 02 2023 18:54:37 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());     // Sat Dec 02 2023
// console.log(myDate.toISOString());      // 2023-12-02T13:26:44.119Z
// console.log(myDate.toJSON());              // 2023-12-02T13:27:46.024Z
// console.log(myDate.toLocaleDateString());  // 2/12/2023
// console.log(myDate.toLocaleString());      // 2/12/2023, 6:59:08 pm

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(myDate);
console.log(myDate.getMonth() + 1);
console.log(myDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
    
})
console.log(newDate.toLocaleString.weekday());