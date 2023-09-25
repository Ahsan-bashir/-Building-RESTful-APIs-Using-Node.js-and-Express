// Import express and other libraries
const express=require('express');
const app=express();
const { format } = require('date-fns');
const authRouter=require('./Authentication');
const userRouter=require('./Users');
const verifyAuth=require('./Authentication/authMiddleware');
const config=require('./config');
const morgan=require('morgan');
// parse JSON data into req.body
app.use(express.json());

// morgan for logging the request
morgan.token('time', () => format(new Date(), 'yyyy-MM-dd')); // Updated date formatting
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :time'));

// call authentication router
app.use('/auth',authRouter)
// call User router
app.use('/users',verifyAuth,userRouter)

// server listening on 3000
app.listen(config.PORT,()=>{
    console.log(`listening on port : ${config.PORT}`);
})



