'use strict';

// ORM -> Object Relational Mapper
const mongoose = require('mongoose');
// bcrypt is a hashing package
const bcrypt = require('bcrypt');
// jsonWebToken is creates/generate and de-crypts tokens based on our secret
const jwt = require('jsonwebtoken');

// what's a mongoose schema?
// it's how we define the shape/format our information will have in our database 
const users = new mongoose.Schema({
  username: {type:String, required:true, unique:true},
  password: {type:String, required:true},
  email: {type: String},
  role: {type: String, default:'user', enum: ['admin','editor','user']},
});

// vinicio - a pre-hook is giving the me ability to execute a callback before an event
users.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hashedPassword => { //.then - promise - async (promise VS callback)
      this.password = hashedPassword;
      next(); // this next is not middleware, here next is mongoose
    })
    .catch(console.error);
});

// statics - static ties a function to the class, not to instances
// verify  - de-cryting your token
// SECRET  - affect the way the crypto algo will encrypt your information
// query   - query determines 
users.statics.authenticateToken = function(token) {
  let parsedToken = jwt.verify(token, process.env.SECRET);
  let query = {_id: parsedToken.id}; // SELECT * FROM User WHERE _id = parsedToken.id
	// vincio - a token has to be unique so you can tie it to a unique user
  return this.findOne(query);
};

users.statics.authenticateBasic = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then( user => user && user.comparePassword(auth.password) )
    .catch(error => {throw error;});
};

users.methods.comparePassword = function(password) {
  return bcrypt.compare( password, this.password )
    .then( valid => valid ? this : null);
};

users.methods.generateToken = function() {
  let token = {
    id: this._id,
    role: this.role,
		// Vinicio - you can add more things in here to expand your token
  };
  return jwt.sign(token, process.env.SECRET, { expiresIn: '7d'});
};

module.exports = mongoose.model('users', users);
