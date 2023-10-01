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
      return done(err, null);
    }
    /**
     * 
     * Get the user profile for the logged in user
     * 
     */
    oauthService.getAccessTokenOfUser(token, (err, user) => {
      if (err) {
        return done(err, null);
      }
      return done(null, user);
    })

})}


module.exports = {
  oauthProcessor
};