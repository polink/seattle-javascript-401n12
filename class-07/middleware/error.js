'use strict';

/**
 * A basic error handler middleware that returns 500 by default
 * @param error
 * @param request
 * @param response
 * @param next
 */
module.exports = (error, request, response, next) => {
  console.log('I am an error handler');
  response.status(500);
  response.send('ERROR');
};