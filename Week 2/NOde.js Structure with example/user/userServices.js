const userDAO=require('./userDAO')

const getUsers=(done)=>{
    userDAO.getUsers(done)
}
const getUserbyId=(userId,done)=>{
    userDAO.getUsers(userId,done)
}
module.exports={getUsers,getUserbyId}