//const coding = ["java","ruby","c++","js","python"];

// const values = coding.forEach( (item) => {
//     console.log(item)
// })

// console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNum.filter( (num) => num > 5)
// console.log(newNums);


// const newNums = myNum.filter( (num) => {
//     return num > 5
    
// })

const newNums = []
myNum.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);