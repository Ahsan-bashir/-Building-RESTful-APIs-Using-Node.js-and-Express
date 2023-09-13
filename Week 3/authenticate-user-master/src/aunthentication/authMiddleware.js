

//import jsonwebtoken and config

//This function verifyToken will verify the token coming from headers 
const verifyToken = (req, res, next) => {
  // Getting the authorization header
  const token = req.headers["authorization"];

 
//Synchronously verify given token using a secret or a public key to get a decoded token 
 
  //return next
  return next();
};

module.exports = verifyToken;