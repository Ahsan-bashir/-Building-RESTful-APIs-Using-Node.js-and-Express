const axios = require('axios');
const config = require("../config");

// function to get the access token

function getGithubAccessToken(code, done) {
  // Github APIs are authenticated and we have to share the token in headers
  // The token is same as what we recieved in the previous step
 
  const params = new URLSearchParams();
  params.append('client_id', config.CLIENT_ID);
  params.append('client_secret', config.CLIENT_SECRET);
  params.append('code', code);

  const headers = {
    'Accept': 'application/json'
  }
  
    axios.post('https://github.com/login/oauth/access_token', params,  headers)
    .then(response => {
      if (response.status === 200) {
        done(null, response.data);
      } else {
        done(response.data);
      }
    })
    .catch(error => {
      if (error.response && error.response.data && error.response.data.error === 'bad_verification_code') {
        // Always call the done callback with an error
        done(new Error('bad_verification_code'));
      } else {
        console.error(error);
        done(error);
      }
    });


}


// Function to get the user profile for the token provided
function getAccessTokenOfUser(token, done) {
  // Github APIs are authenticated and we have to share the token in headers
  // The token is same as what we recieved in the previous step
  console.log(`TToken:${token}`);
  const parts = token.split('&');
  const actualToken = parts[0].split('=')[1];
  console.log(`Actual Token:${actualToken}`);
    const headers = {
      'Authorization': `token ${actualToken}`,
      'Accept': 'application/json'
    }
  
    axios.get('https://api.github.com/user',  {headers})
      .then(response => {
        if (response.status === 200) {
          done(null, response.data);
        } else {
          done(response.data);
        }
      })
      .catch(error => {
        done(error);
      });


}

module.exports = {
  getGithubAccessToken,
  getAccessTokenOfUser
}



