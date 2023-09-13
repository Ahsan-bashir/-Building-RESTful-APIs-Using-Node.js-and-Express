const express = require('express');
const config = require("../config");
const router = express.Router();
const oauthCtrl = require("./auth.controller");

// redirects the login to consent authorization screen from github
router.get('/login', (req, res) => {
 
});


// Callback url to which github oauth code is sent 
router.get('/callback', (req, res) => {
 
        // Return the token in cookie
        // Data should be sent either in cookie or in session storage
       
});

module.exports = router;