

//import users.json file and fs module
const fs=require('fs');
const users=require('../Users/users.json');
//This method will findUser
function findUser(email,done){
    //use filter method to find the user from json file
   const user=users.find(user=>user.email===email);
    if(user){
         done(null,user)
    }
    else{
         done({message:'User not found'},null)
    }
}

//This method will register user
function registerUser(userData,done){
//call fileWrite method and write the user in json file
    fs.writeFile('./users.json',JSON.stringify(userData),(err)=>{
        if(err){
            done(err,null)
        }
        else{
            done(null,{message:'User registered successfully'})
        }
    })
}

module.exports = {
    findUser,registerUser
}