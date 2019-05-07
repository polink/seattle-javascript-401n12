'use strict';

// Vinicio - Code Review - It has a decent amount of comments
// The main idea behind comments is to talk about the 'why', not the 'what'

//3rd Party Resources --> Organizational Comment
const express = require('express');
const cors = require('cors');
const router = require('./router/routes'); // Vinicio - this is your own code, not a 3rd Party.

//Prepare express app  -- Vinicio - I would remove this comment --> this comment is talking about the what
const app = express();

//App level MW --> Organizational
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());
app.use(router);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if( ! isRunning ) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Server Up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  }
};