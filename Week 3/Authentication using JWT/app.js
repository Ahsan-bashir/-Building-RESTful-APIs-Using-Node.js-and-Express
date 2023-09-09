// Import express and other libraries
const express=require('express');
const app=express();
const dateFormat=require('dateformat');
const authRouter=require('./Authentication');
const confiq=require('./config');

const morgan=require('morgan');


