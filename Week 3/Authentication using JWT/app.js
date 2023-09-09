// Import express and other libraries
const express=require('express');
const app=express();
const dateFormat=require('date-format');
const authRouter=require('./Authentication');
const config=require('./config');
const morgan=require('morgan');
// parse JSON data into req.body
app.use(express.json());
// morgan for logging the request
morgan.token('time',()=>dateFormat.asString(dateFormat.ISO8601_FORMAT,new Date()));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :time'));
// call authentication router
app.use('/auth',authRouter)

// server listening on 3000
app.listen(config.PORT,()=>{
    console.log(`listening on port : ${config.PORT}`);
})



