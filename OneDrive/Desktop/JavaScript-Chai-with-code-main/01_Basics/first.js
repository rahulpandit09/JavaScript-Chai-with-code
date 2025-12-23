// console.log("Rahul")

const { use } = require("react");

// let Login = {
//     userName : "rahul123",
//     password : "rahul@123"
// };

// console.log(Login);


// let Customer = {
//     customerName : "Rahul Pandit",
//     customerId : 47,
//     customerEmail : "rahulpandit@gmail.com",
//     customerPhoneNumber : "548787487"
// };

// console.table([Customer]);

//Today I Will practice Data type in javaScript
//Primitive datatype 

let city = "bihar";
let course = "javascript";

console.log(city);
console.log(typeof course);

let age = 34;
let price = 78.5;

console.log(age);
console.log(typeof price);

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(typeof isAdmin);

let result;

console.log(result);
console.log(typeof result);

let data = null;

console.log(data);
console.log(typeof data);

let bigNumber = 6497646413684897649879764n
console.log(bigNumber);
console.log(typeof bigNumber);

//Non Primitive Data Types
let usere = {
    Name : "Rahul",
    age : 45,
    isStudent : true
};

console.log(usere);

let users = {
  name: "Rahul",
  age: 24,
  isStudent: true
};

console.log(users);
console.log(typeof users);

let fruits = ['apple','mango','banana'];

console.log(fruits);
console.log(typeof fruits);

let user = {
    name : "rahul",
    phone : 248973659,
    isUser : true
}

console.log(user);
console.log(typeof user);

function colore(){
    console.log("This is a colore list");   
}

console.log(colore());
console.log(typeof colore);

let myName = "Rahul Kumar";
let anotherName = myName
anotherName = "Rahul Pandit";

console.log(myName);
console.log(anotherName);

let oneNeme = {
    email : "rahulGoogle@gamil.com",
    id : 54946987,
};

let oneAnotherName = oneNeme
oneAnotherName.email = "rahulkashyap.kumar@gmail.com"

console.log(oneNeme.email);
console.log(oneAnotherName.email);