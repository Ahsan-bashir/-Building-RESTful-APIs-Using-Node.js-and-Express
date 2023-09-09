const users=require('./users.json');
const fs=require('fs');
// function to find and register a user
function findUser(email,done){
    const userFound=users.filter((user)=>user.email===email)[0];
    return done(null,userFound);
}

function registerUser(userDetails,done){
    users.push(userDetails);
    fs.writeFileSync('./Users/users.json',JSON.stringify(users))
    return done(null,{message:'User Registered Successfully !!',userDetails});
}
module.exports={findUser,registerUser};