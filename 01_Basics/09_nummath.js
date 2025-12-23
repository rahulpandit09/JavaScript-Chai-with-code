// const score = 400
// console.log(score);

const { preinit } = require("react-dom");

// let myscore = new Number(100);
// console.log(myscore);

// console.log(myscore.toString().length);
// console.log(myscore.toFixed(2));

// const otherNumbers = 1234.359
// console.log(otherNumbers.toPrecision(5));

// const hunderade = 1000000
// console.log(hunderade.toLocaleString('en-IN'));

// <=========================Math===============================>

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(5.9));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(9.45));
// console.log(Math.max(4, 5, 5, 6, 8));
// console.log(Math.min(7, 1 ,3, 4, 5));

// console.log(Math.random());

// console.log(Math.floor(Math.random()*10) + 1);

// const min = 20
// const max = 40


//This is the most important formula most of the time we are using this code. 
//so tomorror when you come again you watch 1.5 speed and alos practice becouse this is the most important concepts .
//console.log(Math.floor(Math.random()*(max - min + 1)) + min);

let value = "10";
console.log(typeof value === "number");
console.log(!isNaN(value));

let str = "456";
console.log(Number(str));
console.log(+str);
console.log(preinit(str));

console.log(parseFloat("45.2px"));

let num = 5.4;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

let price = 199.98723;
//console.log(price.toFixed(2)); // "199.99"
console.log(price.toFixed(2));

console.log(Number.isInteger(45));
console.log(Number.isInteger(45.32));

console.log(Math.max(45, 25, 21, 51));
console.log(Math.pow(2, 3));

console.log(Math.abs(-64));
console.log(2 ** 3);
console.log(Math.sqrt(54));

let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

let a = 10, b =20;
[a, b] = [b, a];
console.log(a, b);

let number = 8;
console.log(number%2 === 0 ? "even" : "odd");

let p = 5 ;
let fact = 1;
for(i = 1; i <= p; i++){
       fact *= i;
    
}
console.log(fact);

let num1 = 12345;
let rev = 0;

while (num1 > 0) {
  rev = rev * 10 + (num1 % 10);
  num1 = Math.floor(num1 / 10);
}
console.log(rev);


let from = 123456;
console.log(from.toString().length);

// let n = 8;
// let neg = true;

// for(let i = 2; i <= Math.sqrt(n); i++){
//     if (n % 1 === 0) neg = false;

// }
// console.log(neg);

let n = 7;
let prime = false;

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) prime = true;
}
console.log(prime);

let marks  = 600;
let total = 700;

let persentage = (marks / total) * 100;
console.log(persentage.toFixed(2) + "%");

let sum = 0.1 + 0.2;
console.log(Number(sum.toFixed(2)));

let x = NaN;
console.log(Number.isNaN(x));


let num2 = 4562646556256965;
console.log(Number.isSafeInteger(num2));


let nuu = 2468431684864651n;
console.log(nuu + 1n);

let top = Math.floor(10000 + Math.random + 90000);
console.log(top);

let arr = [45, 12, 45 , 47]
console.log(Math.max(...arr));
console.log(Math.min(...arr));

let numb = 120;
console.log(numb.toString(4));

// let numc = 123;
// let sumd = 0;

// while(numc > 0){
//     sumd += numc % 10;
//     numc = Math.floor(numc / 10);
// }

// console.log(numc);


function randomBetween (min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

console.log(randomBetween(20, 30));

// let squbse = 50;
// console.log(Number.isInteger(Math.sqrt(squbse)));

let num4 = 49;

console.log(Number.isInteger(Math.sqrt(num4)));


let h = 4000, q = 70, g = 45;
let ci = h *(1 + q / 100)**g;
console.log(ci.toFixed(2));
  