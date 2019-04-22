'use strict';

const express = require('express');
const authRouter = express.Router();
const User = require('./user-model');


authRouter.post('/signup', (request,response,next) => {
  const user = new User(request.body); // Vinicio - user is in memory

  // Vinicio - A LOT of things are going to happen behind the scenes to hash our pass
  // Vinicio - making a new object, DOES NOT mean you save it in the db
  return user.save() // Vinicio - this line invokes the hook
    .then(user => {
      // Vinicio - what can we assume in this line of code?
      // We have a user, this is the perfect time to create a token
      const token = user.generateToken();
      response.send(token);
    })
    .catch(next);
});

module.exports = authRouter;
