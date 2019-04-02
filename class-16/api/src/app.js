'use strict';

//-----------------------------------------------------------------
// DEPENDENCIES
//-----------------------------------------------------------------
// External Dependencies
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

// Local Dependencies
const errorMiddleware = require('./middleware/error');
const fourOhFourMiddleware = require('./middleware/404');
//-----------------------------------------------------------------
// MAIN SERVER
//-----------------------------------------------------------------
const app = express();

app.use(cors()); // Vinicio - for now, we won't see any difference
// app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(fourOhFourMiddleware);
app.use(errorMiddleware);
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
