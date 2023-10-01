const express = require('express');
const config = require("../config");
const router = express.Router();
const oauthCtrl = require("./auth.controller");

// redirects the login to consent authorization screen from github
router.get('/login', (req, res) => {
        const state = Math.random().toString(36).substring(2);
  req.session.state = state;
  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${"http://localhost:3000/auth/callback"}&scope=user&state=${state}`;
  res.redirect(githubAuthUrl);
});


// Callback url to which github oauth code is sent 
router.get('/callback', async(req, res) => {
        
        // Return the token in cookie
        // Data should be sent either in cookie or in session storage
        const { code, state } = req.query;
        const savedState = req.session.state;
        
        if (state !== savedState) {
          return res.status(403).send('Invalid state');
        }
        
        try {
          const accessToken = await oauthCtrl.getAccessToken(code);
          
          // Assuming getAccessToken is an async function that exchanges the code for an access token
          // You might need to implement this function based on GitHub OAuth documentation.
          
          // Now you can use the accessToken for further requests to the GitHub API
          
          // Return the token in cookie (or use it as needed)
          res.cookie('accessToken', accessToken);
          
          res.redirect('/'); // Redirect to a different route after successful authentication
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
});

module.exports = router;