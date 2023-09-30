

//import jsonwebtoken and config
const JWT=require('jsonwebtoken');
const config=require('../../config');
//This function verifyToken will verify the token coming from headers 
const verifyToken = (req, res, next) => {
  // Getting the authorization header
  const token = req.headers["authorization"];
  //if token is not present then return error message
  if (!token) return res.status(403).json({ error: "Forbidden" });
  //if token is present then verify it
  JWT.verify(token, config.secret, (err, decoded) => {
    //if error is present then return error message
    if (err) return res.status(401).json({ error: "Unauthorized" });
    //if decoded is present then set req.user to decoded
    req.user = decoded;
  });
 
//Synchronously verify given token using a secret or a public key to get a decoded token 
  const decoded = JWT.verify(token, config.secret);
  //set req.user to decoded
  req.user = decoded;
  
  //return next
  return next();
};

module.exports = verifyToken;