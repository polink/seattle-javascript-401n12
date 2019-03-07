'use strict';

const players = require('./players-schema.js');
const mongoose = require('mongoose');

const teams = mongoose.Schema({
  name: { type:String, required:true },
}, {toObject:{virtuals:true}, toJSON:{virtuals:true}} );

teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne: false,
});

// Vinicio - Pre hooks are a little bit different than post-hooks
teams.pre('find', function() { // Vinicio - this line MUST be a 'function' not an arrow function
	// Vinicio - pre-hooks are happening BEFORE the fact/event you are looking for
	// for instance, this callback happens before find.
	// Mongoose will send you the document that WILL be created in contextual this.
  try {
    this.populate('players');
  }
  catch(e) { console.log('Find Error', e); }
});


// Arrow functions do not have access to contextual this
// normal functions do have access to contextual this

function test() {
	// We'll have a value of contextual this right here => A
	const arrowFunction = () => {
		// HERE, this will be A
		// this.
		// Vinicio - arrow functions use lexical binding
		// where lexical comes from 'relating to the words or vocabulary of a language.'
		// in practice this mean that the only I need to understand the value of this will
		// be found in the code NOT IN WHO CALLS THE CODE AT RUNTIME
	};

	const normalFunction = function() {
		// Vinicio - the value of this will change right here, based on Who calls normalFunction
		// Vinicio - we call this dynamic binding because it happens at runtime and you 
		// need to know who calls your function
	};
}





module.exports = mongoose.model('teams', teams);
