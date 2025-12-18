const name = "rahul Pandit";
const myRepeoCount = 80;

// console.log(name + myRepeo + "value");
console.log(`Hello My Name is ${name} and myRepeoCount totle ${myRepeoCount}`)
// let name = "Rahul";
// let myRepo = 5;

// console.log(`Hello My Name is ${name} and myRepo Number is ${myRepo}`);

//const gameName = new String('rahulpandit');
let gameName = "rahul-Kumar-pandit";
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(10));
console.log(gameName.indexOf("p"));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-4, 0);
console.log(anotherString);

const newStringOne = "      rahulkumar      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rahul.com/rahul%20pandit";
console.log(url.replace('%20', '-'));

console.log(url.includes('ram'))

console.log(gameName.split('-'));