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

