// Get the config either from environment variables or pick the default
const config = {
  PORT: process.env.PORT || "3000",
  CLIENT_ID: process.env.CLIENT_ID || "436a7d32d46dfedcfc86",
  CLIENT_SECRET: process.env.CLIENT_SECRET || "68b0edc8933bb4013775089a3f016f3b50ec10fd"  
}

module.exports = config;
