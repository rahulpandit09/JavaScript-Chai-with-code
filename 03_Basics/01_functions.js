const { use } = require("react");

function sayHello(){
    console.log("hello howrld");
}

// sayHello();

function addTwoNumbers(Number1, Number2){
    console.log(Number1 + Number2);
}


// const result = addTwoNumbers(3, 5)
// console.log("result:", result);

function userLogedMassage(username){
    if(!username){
        console.log("Pls Enter you usename")
        return
    }
    return `${username} just Loged In` 

}

// console.log(userLogedMassage());


function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(200,300,800))


const user = {
    userName : "rahul",
    price : "8000"
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.userName} and price is ${anyobj.price}`)
}

handleObject({
    userName : "rahul",
    price : "81255"
})

const myNewArray = [200, 500, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))