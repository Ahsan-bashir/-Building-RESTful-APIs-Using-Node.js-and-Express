const express = require('express');
const path = require('path');
const dateFormat = require('dateformat');
const app = express();
const morgan = require('morgan');
const config=  require('./config')
const oauthRouter=require('./oauth');