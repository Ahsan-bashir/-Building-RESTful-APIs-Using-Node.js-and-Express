const express = require('express');
const config = require("../config");
const router = express.Router();
const oauthCtrl = require("./auth.controller");
const { token } = require('morgan');
const cookieParser = require('cookie-parser');
const app=express()

app.use(cookieParser());
// redirects the login to consent authorization screen from github
router.get('/login', (req, res) => {
        const state = Math.random().toString(36).substring(2);
        res.cookie('github_oauth_state', state);  // Set the cookie here
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${"http://localhost:3000/auth/callback"}&scope=user&state=${state}`;
        res.redirect(githubAuthUrl);
});


// Callback url to which github oauth code is sent 
router.get('/callback', (req, res) => {
      const code = req.query.code;
        const returnedState = req.query.state;
        const state = req.cookies['github_oauth_state'];

        // console.log('Received code:', code);
        // console.log('Returned state:', returnedState);
        // console.log('Stored state:', state);


        if (state !== returnedState) {
            
        console.log('State mismatch!'); 
            return res.status(401).send('Error: state mismatch');
            
        }
        oauthCtrl.oauthProcessor(code, (err, data) => {
            if (err) {
                
            console.log('Error processing OAuth code:', err.message);
                return res.status(401).send('Error: ' + err.message);
                
            }
            oauthCtrl.getAccessTokenOfUser(token, (err, user) => {
                if (err) {
                    console.log('Error getting user access token:', err.message);
                    return  res.status(401).send('Error: ' + err.message);
                    
                }
                res.cookie('github_oauth_access_token', token, { maxAge: 900000 });
                res.redirect('/');
            });
            
        });



    });
    

module.exports = router;