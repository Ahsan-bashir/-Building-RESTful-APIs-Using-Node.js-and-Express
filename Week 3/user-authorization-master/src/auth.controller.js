const oauthService = require("./auth.service");


// Controller code which orchestrates the overall process
// It calls the service functions where the business logic is present
function oauthProcessor(code, done) {
  /**
   * 
   * Get the access token for the logged in user
   * 
   */
  oauthService.getGithubAccessToken(code, (err, token) => {
    if (err) {
      console.log("error in 1st token");
      err.status(401).send('Unauthorized');
    
      return done(err);
    }
    /**
     * 
     * Get the user profile for the token provided
     * 
     */
    
    if (typeof token === 'string') {
    oauthService.getAccessTokenOfUser(token, (err, user) => {
      if (err) {
        // console.log(err);
        console.log("error in 2nd token");
        
      err.status(401).send('Unauthorized');
      
        return done(err);
      }
      return done(null, user);
    });
  } else {
    console.error('Token is not a string');
  }
  });
}

module.exports = {
  oauthProcessor
};