const { use } = require("react");

const user = {
    username : "Rahul",
    price : 999,


    
 welcomeMassage : function(){
    console.log(`${this.username},welcome to website`);
 }

}

user.welcomeMassage();


// function one(){
//     console.log(this);
// }

// one();

