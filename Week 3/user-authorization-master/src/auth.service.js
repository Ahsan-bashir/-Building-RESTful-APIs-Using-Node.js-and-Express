const axios = require('axios');
const config = require("../config");

// function to get the access token
function getGithubAccessToken(code, done) {
    const body = {
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        code: code
    }
    const opts = { headers: { accept: 'application/json' } }

    axios.post('https://github.com/login/oauth/access_token',body,opts).then((response)=>{
       return response.data.access_token;
    }).then((token)=>{
      return  done(null,token);
    }).catch((err)=>{
        console.log(err);
       return done(err,null);
    })

}


// Function to get the user profile for the token provided
// function getAccessTokenOfUser(token, done) {
//   // Github APIs are authenticated and we have to share the token in headers
//   // The token is same as what we recieved in the previous step
//   const opts = { headers: { Authorization: `token ${token}` } }
//   axios.get('https://api.github.com/user', opts).then((response)=>{
//       return done(null,response.data);
//   }).catch((err)=>{
//       return done(err,null);
//   })

// }
function getAccessTokenOfUser(token, done) {
  const opts = { headers: { Authorization: `token ${token}` } }
  axios.get('https://api.github.com/user', opts).then((response)=>{
      return done(null,response.data);
  }).catch((err)=>{
      return done(err,null);
  })

}

module.exports = {
  getGithubAccessToken,
  getAccessTokenOfUser
}



