'use strict';

//-----------------------------------------------------------------
// DEPENDENCIES
//-----------------------------------------------------------------
const express = require('express');
const fourOhFourMiddleware = require('./middleware/404');
const errorMiddleware = require('./middleware/error');
//-----------------------------------------------------------------
// MAIN SERVER
//-----------------------------------------------------------------
const app = express();
const authRouter = require('./auth/router');
const protectedRouter = require('./protected/router');

// Setup Routes
app.use(express.json()); // Vinicio - parsing bodies from JSON

// Custom Routes
app.use(authRouter);
app.use(protectedRouter);

// Default Routes
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
