'use strict';

module.exports = (request, response, next) => {
  // // Vinicio - define an error
  // const error = {error: 'NOT FOUND'};
  // // Vinicio - set the error as the response content
  // response.statusCode = 404; // Required
  // response.statusMessage = 'NOT FOUND';
  // // Vinicio - set the body of the response
  // response.setHeader('Content-Type', 'application/json');
  // response.write(JSON.stringify(error));
  // // Vinicio - end the response
  // response.end();
  response.sendStatus(404);
};