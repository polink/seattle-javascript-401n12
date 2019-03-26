'use strict';

// How do I know that this file is middleware?
module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
	// here, next would take you to the error handler, and we don't want that
	// thank u next
};
