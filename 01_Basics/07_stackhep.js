//stack(Primitive)         Hep - (Non-primitive)
//<======================stack=======================>
// let myName = "Rahul Kumar";
// let anotherName = myName
// anotherName = "Rahul Pandit";

// console.log(myName);
// console.log(anotherName);

//<=======================Hep===============================>
// let oneNeme = {
//     email : "rahulGoogle@gamil.com",
//     id : 54946987,
// };

// let oneAnotherName = oneNeme
// oneAnotherName.email = "rahulkashyap.kumar@gmail.com"

// console.log(oneNeme.email);
// console.log(oneAnotherName.email);

// console.log("Hello world!");


// function one(){
//     two();
// }

// function two(){
//     three();
// }
// one();
//  let a = 20;
//  let b = a;

//  b = 70;
//  console.log(a);
//  console.log(b);
 
//  let x = "Rahul Pandit";
//  let y = x;

//  y = "Amit";

//  console.log(x);
//  console.log(y);
 
//  let p = true;
//  let q = p;

//  p = false;

//  console.log(p);
//  console.log(q);

//  let  obj1 = {name : "Rahul"};
//  let obj2 = obj1;
//  obj2.name = "pandit"

//  console.log(obj1);
//  console.log(obj2);

//  let arr1 = [1, 2, 3, 4];
//  let arr2 = arr1;
//  arr2.push(5);
//  console.log(arr1);
//  console.log(arr2);

//  let num = 10;
//  let obj1 = {value : num};

//  num = 20;
//  console.log(obj1.value);


//  let obj = {count : 1};
//  function update(o){
//     o.count = 5;
//  }

//  update(obj);
//  console.log(obj.count)

let obj = { count : 1 };
function update(x){
    x = { count : 10 };
}
update(obj);
console.log(obj.count);