

//import the required module
const express=require('express');
const router=express.Router();
const userController=require('./userController');
//This get method will get the user with token
router.get('/',(req,res)=>{    
//retrive userdata from req claims
        const userdata=req.claims;
//Calling controller findUser method return the error or result
  userController.findUser(userdata.email,(err,result)=>{
     if(err){
         res.status(500).json({message:err.message})
     }
     else{
         res.status(200).json({message:result})
     }      
})
   
})


module.exports = router