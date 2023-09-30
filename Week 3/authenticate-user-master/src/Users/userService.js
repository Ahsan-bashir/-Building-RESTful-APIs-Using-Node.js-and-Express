

//import dao layer
const userDao = require('./userDAO');
function findUser(email,done){
    //call the userdao finduser method
    userDao.findUser(email,(err,result)=>{
        if(err){
            done(err,null)
        }
        else{
            done(null,result)
        }
    })
}

function registerUser(userData,done){
    //call the userdao registeruser method
   userDao.registerUser(userData,(err,result)=>{
       if(err){
           done(err,null)
       }
       else{
           done(null,result)
       }
   })
}


module.exports={
    findUser, registerUser
}