'use strict';

const express = require('express');
const modelFinder = require('../middleware/model-finder.js');
const router = express.Router();

// Vinicio - this is one of the most critical lines to understand
// We are telling express 'whenever you see the argument 'model' in our routes)
// I want you to use modelFinder to populate that value
router.param('model', modelFinder);

// -------------------------------------------------------------------------------
// Route Definitions
// -------------------------------------------------------------------------------
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.delete('/api/v1/:model/:id', handleDelete);
router.put('/api/v1/:model/:id', handlePut);
// -------------------------------------------------------------------------------

// Route Handlers
function handleGetAll(req, res, next) {
  req.model.get() // Vinicio - model is dynamic
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id) // Vinicio - model is dynamic
    .then(records => res.json(records[0]))
    .catch(next);
}

function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handlePut(req, res, next) {
	// Your code here :)
	// Vinicio - some parts of this code are going to be DYNAMIC
	// which one -> THE MODEL :)
}

function handleDelete(req, res, next) {
	// Your code RIGHT HERE!
}

module.exports = router;
