// let arr = [1, 2, 3, 4, 5,]
// const remove = 3;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] ==remove){
//         arr.splice(1,i);
//         break
//     }
// }

// console.log(arr);


let number = [20, 30, 40, 50]
const removeNumber = 50;
for(let i=0; i<number.length; i++){
    if(number[i] == removeNumber){
        number.splice(i, 1)
        break
        
    }
}

//console.log(number)


// let AddNumber = [1, 2 , 3, 4, 5]
// const addNoewNumber = 6;
// AddNumber.push(addNoewNumber);
// console.log(AddNumber)


let AddNumber = [1, 2 , 3, 4, 5]
const addNoewNumber = 344;
AddNumber.unshift(addNoewNumber);
console.log(AddNumber)
