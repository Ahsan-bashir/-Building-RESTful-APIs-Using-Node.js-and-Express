const express=require('express')
const app=express()
const PORT=8083
const{swaggerServe,swaggerSetup}=require('./config')

app.get('/',(req,resp)=>{
resp.send('Results are here')
})

app.use('/api-docs',swaggerServe,swaggerSetup)

app.listen(PORT,()=>{
    console.log(`App is listening on Port : ${PORT}`);
})