'use strict';

module.exports = (error,request, response, next) => {
  console.error(error);
  // Vinicio - we'll have to fix the error here
  if(error.message === 'jwt malformed') {
    response.sendStatus(401);

  } else {
    response.sendStatus(error.status || 500);
  }
};
