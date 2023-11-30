const accountId = 14453
let accountEmail = "yash@gmail.com"
var accountPassword = "12345"
accountCity = "Sangli"
let accountState

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

// accountId = 2   // Not Allowed

accountEmail = "fcbculers@gmail.com"
accountPassword = "212112"
accountCity = "Barcelona"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])