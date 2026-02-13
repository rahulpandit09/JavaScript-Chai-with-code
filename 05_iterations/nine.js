const myNum = [1, 2, 3]

// const myTotal = myNum.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval:${currval}`)
//     return acc + currval
// }, 0)

// const myTotal = myNum.reduce((acc, currval) => acc + currval ,0)
// console.log(myTotal)


const shoppingCart = [
    {
        itemName : "js course",
        price : 1999
    },
    {
        itemName : "python course",
        price : 2999
    },
    {
        itemName : "mobil dev course",
        price : 99999
    },
    {
        itemName : "php course",
        price : 8999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price ,0)
console.log(priceToPay);