const JWT=require('jsonwebtoken');
const config=require('../config');
// middleware function to verify token
function verifyToken(req,res,next){
    
        const token=req.headers['authorization']
        if(!token){
            return res.status(403).send({message:"Please provide token"});
        }

        try {
            const decoded=JWT.verify(token,config.AUTH_secret);
            req.claims=decoded;
        } catch (error) {
            res.status(401).send({message:"Invalid token"});
        }
        return next();
}

module.exports=verifyToken;