const axios = require('axios');
const config = require('../config');

// code to get access token from github

const getGitHubAccessToken=(code,done)=>{
    const body={
        client_id:config.CLIENT_ID,
        client_secret:config.CLIENT_SECRET,
        code:code
    }   
    const opts={headers:{accept:    'application/json'}}

    axios.post('https://github.com/login/oauth/access_token',body,opts).then((response)=>{
       return response.data.access_token
    }).then((token)=>{
      return  done(null,token);
    }).catch((err)=>{
        console.log(err);
       return done(err,null);
    })
}

module.exports={getGitHubAccessToken};