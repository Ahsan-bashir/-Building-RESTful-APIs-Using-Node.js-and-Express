

//import jsonwebtoken and config file

//This function will verify email and password and will return true and false

function verifyUser({email,password},userData){
 
  
   if(userData===undefined){
  return false
   }
   else {

     if(email === userData.email && password === userData)
     return true;
   }
    
  
}

//This function will create JWT token and return the token
// use the method jwt.sign having two parameters payload and Auth_Secret
function createJWT(userdata) {
  //create payload
   
    return token;
  }


  module.exports={
    verifyUser,createJWT
  }