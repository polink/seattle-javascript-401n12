'use strict';

// Vinicio - here we are importing MONGOOSE
const mongoose = require('mongoose');

const players = mongoose.Schema({
  name: { type:String, required:true },
  position: { type:String, required:true, uppercase:true, enum:['P','C','1B','2B','3B','SS','LF','RF','CF'] },
  throws: { type:String, required:true,  uppercase:true,enum:['R','L'] },
  bats: { type:String, required:true, uppercase:true, enum:['R','L'] },
  team: {type:String, required:true},
});


// Vinicio - this is nothing related to a POST request
// They are called hooks, and they are important
// POST -> After (Post-mortem)
players.post('find', function() {
  // console.log(this); // this.name = this.name.toUpperCase();
});

players.post('init', function() {
  // this.name = this.name.toUpperCase(); // <- this will break our tests (that's a good thing)
  console.log(this);
});

players.post('save', function() {
  console.log('saving', this);
});

module.exports = mongoose.model('players', players);
