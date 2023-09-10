// config the PORT for the server to listen on
const config={
    PORT:process.env.PORT || 3000,
    AUTH_secret:process.env.AUTH_secret || 'secret' //setting the env variable(AUTH_secret) for JWT 
}
module.exports=config;  