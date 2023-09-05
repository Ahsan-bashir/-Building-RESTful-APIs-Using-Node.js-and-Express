const express=require('express')
const routes=express.Router()

const   userController=require('./userController')

routes.get("/",(req,res)=>{
    try {
        userController.getUsers((err,results)=>{
            if(err){
               return res.status(400).send(err)
            }
            return res.status(200).send({status:"OK",data:results})
        })
    } catch (error) {
        res.status(500).send('Try Again ')
    }
})
module.exports=routes