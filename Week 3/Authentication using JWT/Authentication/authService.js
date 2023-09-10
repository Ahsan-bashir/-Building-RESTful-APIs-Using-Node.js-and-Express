// imported jwt and config
const JWT = require('jsonwebtoken');
const config=require('../config');
// function to verify a user
function verifyUser({email,password},userData){
    if(userData.email===email && userData.password===password){
        return true;
    }
    return false;
}
// function to create a JWT token

function createJWT(userData){    
    const payload={
        role:"USER",
        email:userData.email,
        name:userData.name
    }
    const token=JWT.sign(payload,config.AUTH_secret,{expiresIn:3600})
    return token;
}

module.exports={verifyUser,createJWT};
