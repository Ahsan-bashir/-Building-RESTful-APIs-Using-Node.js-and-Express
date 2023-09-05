const fs=require('fs')

const getUsers=(done)=>{
    fs.readFile('User/users.json',(err,fileContent)=>{
        if(err){
            return done("Encountered an Error while fetching data !")
        }
        const userData=JSON.parse(fileContent)
        return done(undefined,userData)
    })
}

const getUserbyId=(userId,done)=>{
    fs.readFile('/user/users.json',(err,fileContent)=>{
            if(err){
                return done("Cannot get data  from file")
            }
            let userData=JSON.parse(fileContent)
            let fetchedUsers=userData.find(usr=>usr.userId===userId)

if(fetchedUsers===undefined){
    return done("No user found for corresponding ID")
}
return done(undefined,fetchedUsers)

    })
}
module.exports={getUsers,getUserbyId}

