'use strict';

const express = require('express');

// Custom Routes

// We can have routes like 'account', 'balance', 'check'
const myRoutes = require('../routes/mine.js');

// We can have routes like 'account', 'balance', 'check'
const yourRoutes = require('../routes/yours.js');

const app = express();

// Actual Routes
// Vinicio - telling express to use the routes that we are
// importing from lines 6 and 7
// Vinicio - in express, routes can be seen as 'middleware' themselves
app.use(myRoutes);
// Vinicio - this '/your' is not related to middleware
app.use('/your', yourRoutes);

// Vinicio - here we Just define a start function. we don't call it?
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

