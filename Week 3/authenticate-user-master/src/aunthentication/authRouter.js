

//import the modules that are required

//This method post will regiater the use
router.post('/register',(req,res)=>{
  

        //retrive name, email and password from request body
     
        //calling authController registeruser method return the error msg or the result
authController.registerUser(userDetails,(err,result)=>{
   
})
})

//This method post will login the user once they are registered
router.post('/login',(req,res)=>{
   

        //retrive email and password from req.body
      
        //calling the authController login usermethod return the error or the result 
        authController.loginUser({email,password},(err,result)=>{
           
        })

})

module.exports = router