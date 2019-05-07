'use strict';

// Vinicio - I don't see any sort of organization in how you are including these files
const express = require('express');
const router = express.Router();
const Model = require('../models/score-model');
const model = new Model();
const path = require('path');
const fs = require('fs'); // Vinicio - use fs-extra https://www.npmjs.com/package/fs-extra

const textToSpeech = require('../modules/dictionary');

//============================================================ --> Vinicio these comments are not in app
// Router
//============================================================

router.get('/', (request, response) => {
  response.render('index'); // Vinicio - why is get coded inline, but the other functions are
  // linked to callbacks
});
router.post('/game', startGame);
router.post('/score', postScore);
router.get('/scores', getScores);

//============================================================
// Functionality
//============================================================

// Ask user name, difficulty, # words
// Vinicio - this would be a great place to have comments
async function startGame(request, response, next){
  // Vinicio - prefer de-structuring in these cases
  // let {name, diffilutly, number} = request.body; // Vinicio - Prefer ES6
  let name = request.body.name;
  let difficulty = request.body.difficulty;
  let number = request.body.number; // Vinicio - As a reader, I'm not sure what this number means

  let directory = `${__dirname}/../../public/audio`;

  fs.readdir(directory, (err, files) => { // Vinicio - this code could be simplified with FS-extra
    if (err) console.log(err);

    if (files){
      for (const file of files) { // Vinicio - move this code to its own function
        // Vinicio - a function will allow you to document code without comments and it will make
        // code easier to read and understand
        fs.unlink(path.join(directory, file), err => {
          console.log('Deleting: ' + file);
          // Vinicio - instead of console.logs, use a package to be able to log into files and other
          // sources - https://github.com/winstonjs/winston
          if (err) console.log(err);
          // Vinicio - what are the main reasons behind a file giving us an error when we try to delete it
          // Vinicio - consider using twillio
        });
      }
    }
  });

  try {
    // Vinicio - I would consider renaming the textToSpeech function
    // generateWords || get...
    // Vinicio - is this code creating files?
    let words = await textToSpeech(number, difficulty);
    response.status(200).render('game', {name: name, difficulty: difficulty, number: number, words: words});
  } catch(e) {
    next(e);
  }
}

function postScore(request, response, next){
  model.post(request.body)
    .then(result => {
      response.status(200).render('score', {score: result})
    })
    .catch(next);
}

function getScores(request, response, next){
  model.get()
    .then(result => {
      response.status(200).render('scores', {scores: result})
    })
    .catch(next);
}

module.exports = router;