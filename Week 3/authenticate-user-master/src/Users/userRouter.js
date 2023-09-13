

//import the required module

//This get method will get the user with token
router.get('/',(req,res)=>{
    
       //retrive userdata from req claims
       

        //Calling controller findUser method return the error or result
        userController.findUser(userdata.email,(err,result)=>{
           
        })
   
})


module.exports = router