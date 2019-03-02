'use strict';

const express = require('express');

// Vinicio - this helps us define routes in different files
// with a lot of flexibility
const router = express.Router();

// Here we define a route with a url and a callback
router.get('/my/stuff', getMyStuff);

function getMyStuff(req,res,next) {
  res.status(200).send('Get off my lawn!');
}

module.exports = router;
