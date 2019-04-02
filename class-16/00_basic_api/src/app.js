'use strict';

//-----------------------------------------------------------------
// DEPENDENCIES
//-----------------------------------------------------------------
const express = require('express');
const fourOhFourMiddleware = require('./middleware/404');
//-----------------------------------------------------------------
// MAIN SERVER
//-----------------------------------------------------------------
const app = express();
app.use(fourOhFourMiddleware);

//-----------------------------------------------------------------
// EXTERNAL API
//-----------------------------------------------------------------
// Vinicio - what happens if we want to start a server that's already
// running?
let isRunning = false; // declaration
let isThisAClosure = null; //declaration

module.exports = {
  server: app, // Vinicio - this is the server itself
  start: (port) => {
    if(isRunning) {
      console.log('__ERROR__ : The server is already running');
    } else {
      app.listen(port, () => {
        isRunning = true;
        isThisAClosure = true;
        console.log(`Server is UP on port: ${port}`);
      });
    }
  },
};
//-----------------------------------------------------------------
