//for 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 3) {
       // console.log("3 is a best number")
    }
   // console.log(element)
}


  for (let i = 1; i <= 20; i++) {
    //console.log(`outer loop value ${i}`)
    for (let j = 1; j < 20; j++) {
    //    console.log(`inner loop value ${j} and inner loop ${i}`)
    //console.log(i + '*' + j + ' == ' + i*j)
    }
    
   }

   let myArray = ["flash","Batman","superman"]
   //console.log(myArray.length);
   for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element)
    
   }
    

   // brake & continue

   for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`detected 5`)
        break
    }
    console.log(`Value of i is ${i}`)
   }


   for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`detected 5`)
        continue
    }
    console.log(`Value of i is ${i}`)
   }