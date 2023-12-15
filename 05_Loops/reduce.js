const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 3999
    },
    {
        itemName: "PY Course",
        price: 999
    },
    {
        itemName: "App Development",
        price: 1999
    },
    {
        itemName: "Data Science",
        price: 30999
    }
]

const priceToPlay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPlay);