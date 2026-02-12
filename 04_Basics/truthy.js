const userEmail = []

if(userEmail){
    console.log("got email")
}else{
    console.log("don't have user email")
}


if(userEmail.length === 0){
    console.log("Array empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}