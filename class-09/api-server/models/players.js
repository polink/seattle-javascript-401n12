'use strict';

// 1 - Schema : Blueprint required by mongoose
const schema = require('./players-schema.js');

// 2 - Model : Parent class
const dataModel = require('./model.js');

// Vinicio - in-memory model that's going be based on model.js
// Vinicio - theory: there must be some functionality in model.js to handle data in a model
class Players extends dataModel { }


module.exports = new Players(schema);
