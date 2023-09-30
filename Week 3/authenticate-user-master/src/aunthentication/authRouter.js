

//import the modules that are required
const   express = require('express');
const router = express.Router();
const authController=require('./authController');
//This method post will regiater the use
router.post('/register',(req,res)=>{
  //retrive name, email and password from request body
        const {name,email,password}=req.body;
        //create userDetails object
        const userDetails={
            name,
            email,
            password
        }

     
  //calling authController registeruser method return the error msg or the result
authController.registerUser(userDetails,(err,result)=>{
        if(err){
            res.status(500).json({message:err.message})
        }
        else{
            res.status(200).json({message:result})
        }
})
})

//This method post will login the user once they are registered
router.post('/login',(req,res)=>{
  //retrive email and password from req.body
        const {email,password}=req.body;
        
  //calling the authController login usermethod return the error or the result 
        authController.loginUser({email,password},(err,result)=>{
           if(err){
               res.status(500).json({message:err.message})
           }
                  else{
                res.status(200).json({message:result})
                  }
        })

})

module.exports = router