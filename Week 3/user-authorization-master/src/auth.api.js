const express = require('express');
const config = require("../config");
const router = express.Router();
const oauthCtrl = require("./auth.controller");
const CLIENT_ID=config.CLIENT_ID;
const CLIENT_SECRET=config.CLIENT_SECRET;
const redirectURI = 'http://localhost:3000/oauth/callback';
const scope = 'public_repo';

//  Redirect the user to GitHub to provide login credentials​
router.get('/login', (req, res) => {
        const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectURI}`;
        res.redirect(githubAuthURL);
});


// Callback url to which github oauth code is sent 
router.get('/callback', (req, res) => {
        console.log(`Code: ${req.query.code}`);
        console.log(`CLIENT_ID : ${CLIENT_ID}`);
        console.log(`CLIENT_SECRET : ${CLIENT_SECRET}`);

        // Return the token in cookie
         // Data should be sent either in cookie or in session storage
        oauthCtrl.oauthProcessor(req.query.code, (err, tokenData) => {
                 // Return the token in cookie
         // Data should be sent either in cookie or in session storage
         try {
                console.log(`Token Data: ${tokenData}`);
                res.cookie('token', tokenData, { maxAge: 900000, httpOnly: true });
                res.redirect('/');
         } catch (error) {
                res.status(401).send('Unauthorized');
                        throw new Error('No code provided');
         }
               
                

             
                
        });
       
        // if (err) {
        //         console.error(`Error while getting access token: ${err}`);
        //         res.status(500).send(`Error while getting access token: ${err}`);
        // } else {
               
        //         res.cookie('access_token', tokenData.access_token, { maxAge: 900000, httpOnly: true });
        //         console.log(`Token object: ${JSON.stringify(tokenData)}`);
        //       }
        
       
});

module.exports = router;