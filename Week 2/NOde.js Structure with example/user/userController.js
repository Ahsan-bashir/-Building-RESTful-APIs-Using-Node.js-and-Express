const userServices=require('./userServices')

const getUsers=(done)=>{
        userServices.getUsers(done)
}
const getUserbyID=(userId,done)=>{
    userServices.getUsers(userId,done)
}
module.exports={getUsers,getUserbyID}