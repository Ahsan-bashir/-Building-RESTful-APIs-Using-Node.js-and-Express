

//import the userService and authService module
const authService=require('./authService');
const userService=require('../Users/userService');

//This function will registerUser it will take two parameters
//first the userData second the callback
//call the userService finduser method and also the userService register method
function registerUser(userData,done){
    userService.findUser(userData.email,(err,user)=>{
        if(err){
            done(err,null)
        }
        else if(user){
            done({message:'User already exists'},null)
        }
        else{
            userService.registerUser(userData,(err,result)=>{
                if(err){
                    done(err,null)
                }
                else{
                    done(null,result)
                }
            })
        }
    }
    )
}

//This function will loginUser 
//Use the method findUser of userService to first verify and if userfound than call
//the createToken method
function loginUser({ email, password }, done) {
    userService.findUser(email, (err, user) => {
        if (err) {
            done(err, null)
        }
        else if (!user) {
            done({ message: 'User does not exist' }, null)
        }
        else {
            authService.createJWT({user, password}, (err, token) => {
                if (err) {
                    done(err, null)
                }
                else {
                    done(null, token)
                }
            }
            )
        }
    })  
  }

module.exports = {
    registerUser,loginUser

}