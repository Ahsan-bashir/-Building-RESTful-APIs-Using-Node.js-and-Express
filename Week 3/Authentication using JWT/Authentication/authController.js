// import necessary modules
const userService = require('../Users/userService');
const authService = require('./authService');

// function to find and register a user

function registerUser(userDetails, done) {
    userService.findUser(userDetails.email, (err, userFound) => {
        if (err) {
            return done(err, null);
        }
        else {
            if (userFound) {
                return done(new Error('User already exists !!'), null);
            } else {
                userService.registerUser(userDetails, done)
            }
        }
    })
}
// function to login a user for controller layer
function loginUser({ email, password }, done) {
    userService.findUser(email, (err, userFound) => {
        if (err) {
            return done(err, null);
        }
        else {
            if (userFound) {
                const userVerified = authService.verifyUser({ email, password }, userFound);
                if (userVerified) {
                    const jwtToken = authService.createJWT(userFound)
                    return done(null, { message: 'User Logged in Successfully !!', jwtToken });
                } else {
                    return done(new Error('user not verified !!'), null);
                }
            }
        }
    })
}

module.exports = { registerUser,loginUser };