// neccessary imports for the authRouter
const express=require('express');
const router=express.Router();
const authController=require('./authController');

// post request to register a user

router.post('/register',(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
          return res.status(400).send({message:'Please provide all the details'});
        }
        const userDetails={
            name,
            email,
            password
        }
        authController.registerUser(userDetails,(err,result)=>{
            if(err){
                return res.status(400).send({message:"User Alrady exists !!"});
            }
            return res.status(200).send({message:result});
        })
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});
// post request to login a user
router.post('/login',(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).send({message:"Please provide all the details"});
        }
        const userDetails={
            email,
            password
        }
        authController.loginUser(userDetails,(err,result)=>{
            if(err){
                return res.status(401).send({message:"Invalid Credentials "});
            }
            return res.status(200).send({message:result});
        })
    } catch (error) {
        return res.status(400).send({message:"Unexpected error while logging the user",error});
    }
})
module.exports=router;