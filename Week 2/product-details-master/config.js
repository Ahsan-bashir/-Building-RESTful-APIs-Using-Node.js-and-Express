// Get the config either from environment variables or pick the default
const config = {
  PORT: process.env.PORT || "8000",
  CLIENT_ID: process`enter code here`.env.CLIENT_ID || "CLIENT_ID",
  CLIENT_SECRET: process.env.CLIENT_SECRET || "CLIENT_SECRET",
}

module.exports = config;