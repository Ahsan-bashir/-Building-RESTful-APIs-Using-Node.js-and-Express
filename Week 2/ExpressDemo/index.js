const express=require('express')
const app=express()
// const users=require('./users')

const users=[
    {"username":"Ahsan","userId":101},
    {"username":"Bilal","userId":102},
    {"username":"Sheraz","userId":103},
    {"username":"Rehan","userId":104}
]
app.get("/users/:userId",(req,res)=>{
    const userData=users.find(user=>user.userId===parseInt(req.params.userId))

    if(userData){
            res.status(200).send(userData)
    }else{
        res.status(404).send("No Such User !")
    }
})

app.listen(3000,()=>{
    console.log("Post is listening on 3000");
})