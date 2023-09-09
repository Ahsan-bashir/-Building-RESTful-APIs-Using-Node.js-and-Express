const userDAO = require('./userDAO');
// function to find and register a user in service layer
function findUser(email, done) {
    userDAO.findUser(email,done)    
}
function registerUser(userDetails, done) {
    userDAO.registerUser(userDetails,done)
}
module.exports = {findUser,registerUser};