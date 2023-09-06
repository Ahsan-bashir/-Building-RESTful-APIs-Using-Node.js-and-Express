const userDAO=require('./userDAO')

const getUsers=(done)=>{
    userDAO.getUsers(done)
}
const getUserbyId=(userId,done)=>{
    userDAO.getUserbyId(userId,done)
}
module.exports={getUsers,getUserbyId}