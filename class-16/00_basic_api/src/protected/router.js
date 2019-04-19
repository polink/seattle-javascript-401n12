'use strict';

const express = require('express');
const authMiddleware = require('../auth/middleware');
const protectedRouter = express.Router();


protectedRouter.get('/protected', authMiddleware,(request, response, next) => {
  if (request.user) {
    // Vinicio - here, you do everything you need to do in order to fullfill
    // the request
    response.sendStatus(200);
  } else {
    response.sendStatus(401);
  }
});

module.exports = protectedRouter;