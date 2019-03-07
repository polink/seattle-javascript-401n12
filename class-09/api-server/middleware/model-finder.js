'use strict';

//needs to result in a new instance of a model
module.exports = (req, res, next) => {
	// Vinicio - put a breakpoint right here and check request.params
	// OR (Not recommended and you'll make puppies cry) console.log(request.prams);
  let modelName = req.params.model; // Vinicio - retriving request.params.model
	// Vinicio - from the point of view this code. model is just a module
	// Vinicio - creating a new member variable
  req.model = require(`../models/${modelName}.js`);
	// Vinicio - starting in this line. I can type request.model.______ and I'll be
	// reaching the appropiate model (the module itself)
  next();
};
