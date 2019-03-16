'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./user-model');

authRouter.post('/signup', (request, response, next) => {
  // Vinicio - as as soon as we get the body of the request
  // we get a new user, but right now it's just a schema.
  const user = new User(request.body);
  user.save() // 1
    .then((user) => {
      // Over here, I know that I have a fully-formed user
      // now, I want to create a token and respond with the token
      request.token = user.generateToken();
      request.user = user;
      // Vinicio - we set a token and a user in request, in case some
      // middleware function needs it
      // Vinicio - set a response;
      response.set('token', request.token);
      response.cookie('auth', request.token);
      response.send(request.token);
    })
    .catch(next);
});

authRouter.post('/signin',auth,(request,response, next) => {
  // D
  // Vinicio - if I got this far, the username and password were correct
  // because the middleware function, is checking for errors
  response.cookie('auth', request.token);
  response.send(request.token);
});

module.exports = authRouter;