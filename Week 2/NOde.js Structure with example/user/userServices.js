const userDAO=require('./userDAO')

const getUsers=(done)=>{
    userDAO.getUsers(done)
}
const getUserbyId=(userId,done)=>{
    userDAO.getUserbyId(userId,done)
}
const updateUserbyId=(userId,userName,done)=>{
    userDAO.getUserbyId(userId,userName,done)
}
module.exports={getUsers,getUserbyId,updateUserbyId}