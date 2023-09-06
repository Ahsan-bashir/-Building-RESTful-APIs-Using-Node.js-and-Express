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

routes.get('/:userId',(req,res)=>{
    try {
        const id=req.params.userId
        userController.getUserbyID(id,(err,results)=>{
            if(err){
                return res.status(400).send(err)
            }
            return res.status(200).send({
                status:"OK",
                data:results
            })
        })
        
    } catch (error) {
        return res.status(500).send("Try again in few minutes")
    }
})
module.exports=routes