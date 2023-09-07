const fs=require('fs')

const getUsers=(done)=>{
    fs.readFile('User/users.json',(err,fileContent)=>{
        if(err){
            return done("Encountered an Error while fetching data !")
        }
        const userData=JSON.parse(fileContent)
        if(!fileContent){
            return done("No data in file")
        }
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

const updateUserbyId=(userId,userName)=>{
    fs.readFile('/user/users.json',(err,fileContent)=>{
        if(err){
            return done ("Cannot get data from file")
        }
        let userData=JSON.parse(fileContent)
        let index=userData.indexOf(usr=>usr.userId===userId)
        if(index==-1){
            return done("No user with this id")
        }
        userData[index].userName=userName
        fs.writeFile('/user/users.json',JSON.stringify(userData),(err,updatedData)=>{
            if(err){
                return done("Cannot write data")
            }   
            return done(undefined,"Successfully Updated user details ")  
        })
    })
}
module.exports={getUsers,getUserbyId,updateUserbyId}

