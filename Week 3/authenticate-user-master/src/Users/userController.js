

//import userService
const userService=require('./userService');

function findUser(email,done){
    //call userService findUser method and pass the parameters
   userService.findUser(email,(err,result)=>{
       if(err){
           done(err,null)
       }
       else{
           done(null,result)
       }
   })
}

module.exports = {
    findUser
}