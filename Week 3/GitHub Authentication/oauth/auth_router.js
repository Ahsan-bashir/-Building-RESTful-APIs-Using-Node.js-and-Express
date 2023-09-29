const express=require('express');
const config=require('../config');
const router = express.Router();
const oauthController=require('./auth_controller');
// route to redirect the user to github login page
router.get('/login',(req,res)=>{
res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`);
})

// route to get the access token from github
router.get('/callback',(req,res)=>{
    const code=req.query.code;
    oauthController.oauthProcessor(code,(err,token)=>{
        if(err){
            res.status(500).json({message:"Internal Server Error"});
        }else{
            res.redirect(`/welcome.html?access_token=${token}`);
        }
    })
})

module.exports=router;