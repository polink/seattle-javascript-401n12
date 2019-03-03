'use strict';

const express = require('express');

const router = express.Router();

router.get('/stuff', getStuff);

// TFS -> VSTS -> Azuze DevOps (in less than one year)

function getStuff(req,res,next) {
  res.status(200).send('Get off their lawn!');
}

module.exports = router;