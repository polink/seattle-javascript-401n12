'use strict';

module.exports = (error,request, response, next) => {
  console.error(error);
  response.sendStatus(error.status || 500);
};
