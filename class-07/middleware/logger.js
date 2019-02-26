'use strict';

/**
 * Simple middle ware function to log anything before a route happens
 * @param request
 * @param response
 * @param next
 */
module.exports = (request, response, next) => {
  // Vinicio - just by having the next argument, Express knows that this function
  // will be middleware-aware or a middleware itself
  console.log('-----------------------------------------');
  console.log('Logging something before a route');
  console.log('KALI IS CUTE');
  console.log('-----------------------------------------');

  // Vinicio - this is the most important line when witting middleware
  next();
};
