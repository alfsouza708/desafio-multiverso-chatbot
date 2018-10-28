const express = require('express');
const app = express();

//var config = require('./config/config.json');
//require('./routes/api')(app,config)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
/**
 * Get port from environment or local config parameters.
 */
const port = process.env.PORT || config.port;