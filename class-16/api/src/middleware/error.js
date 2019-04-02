'use strict';

// Vinicio - request, response, next -> normal middleware
//           error, request, response, next -> error middleware
module.exports = (error, request, response, next) => {
  response.sendStatus(error.status || 500);
};
