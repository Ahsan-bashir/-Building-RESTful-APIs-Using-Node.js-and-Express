const userService = require('./userService');
// function to find a user in controller layer
function findUser(email, done) {
    userService.findUser(email, done);
}   

module.exports = {findUser};