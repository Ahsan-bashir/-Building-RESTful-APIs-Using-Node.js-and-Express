// import necessary modules
const userService = require('../Users/userService');
const { use } = require('./authRouter');
const authService = require('./authService');

// function to find and register a user

function registerUser(userDetails, done) {
    userService.findUser(userDetails.email, (err, userFound) => {
        if (err) {
            return done(err, null);
        }else{
            if(userFound){
                return done(new Error('User already exists !!'),null);
        }else{
            userService.registerUser(userDetails,done)
        }
    }
})
}

module.exports = {registerUser};