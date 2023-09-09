// Import express and other libraries
const express=require('express');
const app=express();
const dateFormat=require('date-format');
const authRouter=require('./Authentication');
const confiq=require('./config');
const morgan=require('morgan');
// parse JSON data into req.body
app.use(express.json());

