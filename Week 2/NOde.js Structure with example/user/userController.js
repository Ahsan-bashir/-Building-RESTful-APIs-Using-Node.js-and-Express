const userServices=require('./userServices')

const getUsers=(done)=>{
        userServices.getUsers(done)
}

const getUserbyID=(userId,done)=>{
    userServices.getUserbyId(userId,done)
}

const updateUserbyId=(userId,userName,done)=>{
    userServices.getUserbyId(userId,userName,done)
}
module.exports={getUsers,getUserbyID,updateUserbyId}