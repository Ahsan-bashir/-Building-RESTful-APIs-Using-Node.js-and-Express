const express = require('express');
const path = require('path');
const { format } = require('date-fns');
const app = express();
const morgan = require('morgan');
const config=  require('./config')
const oauthRouter=require('./oauth');
const { log } = require('console');

// For logging the the requset reaching to this server 
morgan.token('time', () => format(new Date(), 'yyyy-MM-dd')); // Updated date formatting
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :time'));

// For serving static files
app.use(express.static('static'));

app.listen(config.PORT,()=>{
    console.log(`Server started at port ${config.PORT}`);
})

//root path to redirect to index.js
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/static/index.html'))
}
)

// setting up mount point for API
app.use('/oauth',oauthRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(`Request for ${req.method} ${req.url} not found`);
    res.status(404).send({message:"Not Found"});
});