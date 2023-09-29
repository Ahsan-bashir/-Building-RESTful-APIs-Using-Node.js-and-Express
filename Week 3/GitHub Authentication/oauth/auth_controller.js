const oauthServices = require('./auth_services');

const oauthProcessor=(code,done)=>{
    oauthServices.getGitHubAccessToken(code,(err,token)=>{
        if(err){
            return done(err,null);
        }else{
            return done(null,token);
        }
    })
}

module.exports=oauthProcessor;
