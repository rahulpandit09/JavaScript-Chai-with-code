// DataTypes
//In primitive I have total 7 types : String, Number, Boolern, null, undefined, Symbol, BigInt

const score = 78;
const NumberOfScore = 45.5;

const userInLOggedIn = false;
const outSideTemp = null

let undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

console.log("Hi This is rahul");

const bigNumber = 798646789746649n;
console.log(bigNumber);


//Reference (Non Primitive) : Array, Objects, Functions 

const Fruits = ["Mango","Banana","Apple","Orange","PineApple"];

console.table([Fruits]);

let customer = {
    customerName : "Rahul",
    customerPhoneNumber : "54545848454",
    customerId : 45
};

console.table([customer]);

const myFunction = function (){
     console.log("Hello World!")
};

myFunction();


console.log(typeof myFunction );
