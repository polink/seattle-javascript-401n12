'use strict';
// use strict is going to enforce the more strict set of rules that were created in
// starting in ES5

// we are not requiring the .env

// we are requiring an npm package called .env which when we call the .config() method
// loads all our environmental variables into process.env
// npm package
// methods
// environmental variables
require('dotenv').config();

// Start up DB Server
const mongoose = require('mongoose');
// npm package
// ORM -> Object Relational Mapper
// [DB]<-----ORM------->[CODE]
const options = {
  useNewUrlParser:true, // mongo urls have changed
  useCreateIndex: true, // mongo will take care of ids for you
};

// connecting mongo into our MONGO DATABASE
mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server
// commonjs module
require('./src/app.js').start(process.env.PORT);
